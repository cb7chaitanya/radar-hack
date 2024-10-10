# Bodhi

**Bodhi** is a cutting-edge blockchain application that provides seamless access to advanced AI models. Users can log in via Google, connect their Solana wallets, and recharge them with Solana to receive Bodhi tokens. These tokens enable pay-as-you-go interactions with premium AI services like Gemini, GPT, and Llama. With a user-friendly interface and secure smart contracts developed in Rust, Bodhi merges blockchain technology with AI, creating a unique ecosystem for digital engagement.

## Why Bodhi?

Bodhi stands out as a transformative platform that merges blockchain and AI capabilities, offering a unique, decentralized interaction framework. Here's why Bodhi is essential:

- **Seamless Access to AI**: Users can easily chat with advanced AI models like Gemini and GPT on a pay-as-you-go basis.
- **Crypto Integration**: Recharge wallets with Solana and receive Bodhi tokens to interact with AI services.
- **User-Centric Design**: Intuitive interface that simplifies interactions for tech-savvy users and newcomers alike.
- **Decentralization and Security**: Blockchain ensures secure transactions and data integrity.
- **Innovative Ecosystem**: Paves the way for future developments in AI and digital identity.

## Tech Stack

Bodhi leverages a range of modern technologies to deliver a fast, scalable, and secure platform:

- **Turborepo**: Efficient monorepo management for both frontend and webhook services.
- **Next.js**: React-based framework for server-side rendering and static site generation.
- **React.js**: Frontend JavaScript library for building user interfaces.
- **Tailwind CSS**: Utility-first CSS framework for rapid UI development.
- **Node.js**: Backend runtime environment for handling server-side logic and APIs.
- **Gemini/Open ai api**: Integrated for AI chat functionalities.
- **Anchor**: Framework for building Solana-based decentralized applications.
- **Rust**: Smart contract development ensuring secure and reliable interactions.
- **TypeScript**: Static typing for both frontend and backend codebases.
- **Solana**: Blockchain platform for fast, secure, and scalable decentralized applications.

## Current Features

- **Google Login**: Quick and secure authentication using Google credentials.
- **Solana Wallet Integration**: Effortless management of digital assets through Solana wallet connection.
- **Crypto Recharge**: Recharge wallets with Solana for flexible account funding.
- **Bodhi Token Distribution**: Earn Bodhi tokens upon recharging for AI service access.
- **Pay-as-You-Go AI Chat**: Interact with advanced AI models using tokens, ensuring cost-effective access to AI technology.
- **User-Friendly Interface**: Intuitive design across a landing page, login page, and AI chat page.
- **Turbo Repo Utilization**: Efficient development and deployment through Turbo Repo.
- **Smart Contract Integration**: Secure smart contracts in Rust, powering web3 functionalities.
- **Real-Time Token Tracking**: Monitor Bodhi token balance and usage during AI interactions.

## Future Scope

- **Liquidity Pool**: Create a liquidity pool for Bodhi tokens via Raydium to establish an AI-backed economy.
- **Expanded AI Services**: Integrate AI models like Llama, and expand the token-based workflow.
- **Feature Enhancements**: Implement conversation history, voice support, and chat features.
- **Mobile App**: Develop a React Native mobile app for greater accessibility.
- **Custom LLM Deployment**: Allow users to configure pricing and deploy their own AI models.
- **AI Marketplace**: Enable trading of AI resources (GPUs, datasets) via crypto.

## Planned Iterations

- **Enhanced UX/UI**: Continuously improve interface based on user feedback.
- **Mobile Optimization**: Provide mobile access to Bodhi services.
- **Expanded Payment Options**: Support standard crypto payments and additional options like links or blinks.
- **Advanced AI Models**: Regularly integrate new AI models.
- **PDA Generation**: Assign platform-associated wallets to users upon signup, enhancing trustless interactions.

## Project Setup

### Installation

1. **Clone the Repository**:

   ```bash
   git clone https://github.com/cb7chaitanya/radar-hack
   cd bodhi
   ```

2. **Install Dependencies**:

   ```bash
   npm install
   ```

3. **Set Up Environment Variables**:

   - **Web**: Create a `.env` file in the `web` directory and add the following:

     ```bash
     NEXT_PUBLIC_WEBHOOK_URL=""
     GOOGLE_CLIENT_ID=""
     GOOGLE_CLIENT_SECRET=""
     NEXTAUTH_URL=""
     NEXTAUTH_SECRET=""
     ```

   - **Webhook**: Create a `.env` file in the `webhook` directory and add:

     ```bash
     PORT=3301
     GEMINI_API_KEY=
     OPEN_AI_KEY=
     ```

   - **DB**: Set up the necessary environment variables in the `db` directory.

4. **Run the Development Server**:

   ```bash
   npm run dev
   ```

   The application will be available at `http://localhost:3000`.

## Reference

For more details, visit the [Bodhi Documentation](https://marred-forger-0bc.notion.site/Bodhi-Documentation-1198f73b891b8041bba4fd9e8cac28f3).
