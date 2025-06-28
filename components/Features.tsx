export default function Features() {
  const items = [
    "Dynamic Risk Allocation using real-time ATR & Pip precision",
    "Multi-Timeframe Smart Confluence with adaptive signal weight",
    "Volatility-Aware Regime Switching (Z-score of ATR)",
    "Precise Trade Entries with CCI, MACD, RSI, EMA and Volume",
    "Time-of-Day Session Filter for London & NY precision",
    "Advanced Exit Logic: BreakEven, Partial-TP, Auto-Trailing",
    "Self-Regulating Aggregated Closure for floating drawdown control",
    "Real-Time Logging & On-Chart Dashboard with market data",
    "Fully Optimized for Cent Account and Micro Pip model (XAUUSDc)",
    "Modular and Scalable Design — from $5k to $500k accounts",
  ]

  return (
    <section className="bg-white text-gray-800 py-16 px-6">
      <div className="max-w-5xl mx-auto">
        <h2 className="text-3xl md:text-4xl font-bold text-center mb-10">
          🔍 Key Features
        </h2>
        <ul className="space-y-4 text-lg">
          {items.map((text, idx) => (
            <li key={idx} className="flex items-start">
              <span className="text-yellow-500 mr-2 mt-1">✔️</span>
              <span>{text}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  )
}
