export function tokenToBodhiCost(
  inputTokenCount: number,
  outputTokenCount: number,
) {
  if (inputTokenCount < 128000) {
    const inputCost = (0.075 / 1000000) * inputTokenCount;
    const outputCost = (0.3 / 1000000) * outputTokenCount;
    const bodhiPayable = inputCost + outputCost;
    return bodhiPayable;
  } else {
    const inputCost = (0.15 / 1000000) * inputTokenCount;
    const outputCost = (0.6 / 1000000) * outputTokenCount;
    const bodhiPayable = inputCost + outputCost;
    return bodhiPayable;
  }
}
