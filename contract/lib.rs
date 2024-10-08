use anchor_lang::prelude::*;
use anchor_spl::token::{self, Token, TokenAccount, Transfer};

declare_id!("En5VWoXjQRnpNHA3nDdC4E8mUMEDXCwGo5UowY3ASDoT");

#[program]
pub mod marketplace {
    use super::*;

    const ADMIN: &str = "DjJJEJrS5BBG2EvNshtN8TAyXqcUv66VPt1oqHXYmFcR";
    const TOKEN_MINT: &str = ""; // Replace with your token's mint address

    #[inline(never)]
    pub fn initialize(ctx: Context<Initialize>) -> Result<()> {
        Ok(())
    }

    pub fn add_service(
        ctx: Context<AddService>,
        service_index: u8,
        service_name: [u8; 32],
        input_token_price: u64,
        output_token_price: u64,
    ) -> Result<()> {
        if ctx.accounts.user.key.to_string() != ADMIN {
            return Err(MarketplaceError::Unauthorized.into());
        }

        let marketplace = &mut ctx.accounts.marketplace;

        let service = Service {
            service_name,
            input_token_price,
            output_token_price,
        };

        marketplace.services[service_index as usize] = service;
        Ok(())
    }

    pub fn process_action(
        ctx: Context<Action>,
        service_index: u8,
        input_token_amount: u64,
        output_token_amount: u64,
    ) -> Result<()> {
        if ctx.accounts.user.key.to_string() != ADMIN {
            return Err(MarketplaceError::Unauthorized.into());
        }

        let marketplace = &ctx.accounts.marketplace;
        let user_token_account = &ctx.accounts.user_token_account;
        let platform_token_account = &ctx.accounts.platform_token_account;
        let token_program = &ctx.accounts.token_program;

        let service = marketplace
            .services
            .get(service_index as usize)
            .ok_or(MarketplaceError::InvalidArgument)?;

        // Check if the user_token_account's mint matches your token's mint
        if user_token_account.mint.to_string() != TOKEN_MINT {
            return Err(MarketplaceError::InvalidTokenMint.into());
        }

        let total_price = (service.input_token_price * input_token_amount)
            + (service.output_token_price * output_token_amount);

        if user_token_account.amount < total_price {
            return Err(MarketplaceError::InsufficientFunds.into());
        }

        let transfer_instruction = Transfer {
            from: user_token_account.to_account_info(),
            to: platform_token_account.to_account_info(),
            authority: ctx.accounts.user_token_account.to_account_info(),
        };
        let cpi_context = CpiContext::new(token_program.to_account_info(), transfer_instruction);
        token::transfer(cpi_context, total_price)?;

        msg!(
            "Service {:?} executed. Total price: {}",
            service.service_name,
            total_price
        );

        Ok(())
    }
}

#[derive(Accounts)]
pub struct Initialize<'info> {
    #[account(init, seeds = ["market".as_ref()], bump, payer = user, space = 8 + 2400)]
    pub marketplace: Box<Account<'info, Marketplace>>,
    #[account(mut)]
    pub user: Signer<'info>,
    pub system_program: Program<'info, System>,
}

#[derive(Accounts)]
pub struct AddService<'info> {
    #[account(mut)]
    pub marketplace: Box<Account<'info, Marketplace>>,
    #[account(mut)]
    pub user: Signer<'info>,
}

#[derive(Accounts)]
pub struct Action<'info> {
    #[account(mut)]
    pub marketplace: Box<Account<'info, Marketplace>>,
    #[account(mut)]
    pub user: Signer<'info>,
    #[account(mut, constraint = user_token_account.owner == user.key())]
    pub user_token_account: Account<'info, TokenAccount>,
    #[account(mut)]
    pub platform_token_account: Account<'info, TokenAccount>,
    pub token_program: Program<'info, Token>,
}

#[account]
pub struct Marketplace {
    pub services: [Service; 50],
}

#[derive(Clone, AnchorSerialize, AnchorDeserialize, Debug, Default)]
pub struct Service {
    pub service_name: [u8; 32],
    pub input_token_price: u64,
    pub output_token_price: u64,
}

#[error_code]
pub enum MarketplaceError {
    #[msg("Unauthorized user.")]
    Unauthorized,

    #[msg("Invalid argument.")]
    InvalidArgument,

    #[msg("Invalid token mint.")]
    InvalidTokenMint,

    #[msg("Insufficient funds.")]
    InsufficientFunds,
}
