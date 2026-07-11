"use client"
import { useState } from 'react'

export default function AffiliateHubPage() {
  const [traffic, setTraffic] = useState(5000)
  const [conversion, setConversion] = useState(2)
  const [price, setPrice] = useState(120)
  const [commission, setCommission] = useState(25)
  const [links, setLinks] = useState([
    { name: 'Adobe Creative Cloud', url: 'https://adobe.com/ref?id=user99' }
  ])
  const [progName, setProgName] = useState('')
  const [rawUrl, setRawUrl] = useState('')

  const totalSales = Math.round(traffic * (conversion / 100))
  const netEarnings = totalSales * price * (commission / 100)

  const addLink = (e: any) => {
    e.preventDefault()
    if (!progName ||!rawUrl) return
    setLinks([...links, { name: progName, url: rawUrl }])
    setProgName('')
    setRawUrl('')
  }

  const copyLink = (url: string) => {
    navigator.clipboard.writeText(url)
    alert('Link copied!')
  }

  return (
    <div className="bg-[#0F172A] text-gray-100 min-h-screen">
      {/* Navbar */}
      <nav className="bg-[#1E293B] border-b border-gray-700 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="bg-indigo-600 p-2 rounded-lg font-bold">AI</div>
          <span className="text-xl font-bold">AffiliateHub <span className="text-indigo-400">AI</span></span>
        </div>
        <span className="bg-green-500/10 text-green-400 border border-green-500/20 px-3 py-1 rounded-full text-xs flex items-center gap-2">
          <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span> Live & Synced
        </span>
      </nav>

      <main className="max-w-7xl mx-auto p-4 md:p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        {/* Left Column */}
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-[#1E293B] border border-gray-700 rounded-2xl p-6 shadow-xl">
            <h2 className="font-bold mb-4 flex items-center gap-2">🔔 Program Status Monitor</h2>
            <div className="space-y-3">
              <div className="p-3 bg-white/5 rounded-xl flex justify-between items-center">
                <div><h3 className="text-sm font-medium">Canva (Canvassador)</h3><p className="text-xs text-gray-400">Affiliate Program</p></div>
                <span className="bg-red-500/10 text-red-400 px-2.5 py-1 rounded-md text-xs font-bold">Closed</span>
              </div>
              <div className="p-3 bg-white/5 rounded-xl flex justify-between items-center">
                <div><h3 className="text-sm font-medium">Figma Creator Program</h3><p className="text-xs text-gray-400">Commissions & Dev</p></div>
                <span className="bg-green-500/10 text-green-400 px-2.5 py-1 rounded-md text-xs font-bold">Open</span>
              </div>
              <div className="p-3 bg-white/5 rounded-xl flex justify-between items-center">
                <div><h3 className="text-sm font-medium">Adobe Creative Cloud</h3><p className="text-xs text-gray-400">Sales & Subscriptions</p></div>
                <span className="bg-green-500/10 text-green-400 px-2.5 py-1 rounded-md text-xs font-bold">Open</span>
              </div>
            </div>
          </div>

          <div className="bg-gradient-to-br from-indigo-900/30 to-purple-900/30 border border-indigo-500/30 rounded-2xl p-6">
            <h2 className="font-bold mb-2 text-indigo-300">✨ Smart Alternatives</h2>
            <p className="text-xs text-gray-400 mb-4">Since <b>Canva is currently closed</b>, we recommend focusing on these high-converting alternatives:</p>
            <div className="space-y-2 text-xs">
              <div className="bg-[#1E293B] p-3 rounded-lg flex justify-between"><span>Adobe Express Affiliate</span><span className="text-indigo-400 font-bold">Free Trial Paid</span></div>
              <div className="bg-[#1E293B] p-3 rounded-lg flex justify-between"><span>Kittl Design Program</span><span className="text-green-400 font-bold">30% Recurring</span></div>
            </div>
          </div>
        </div>

        {/* Right Column */}
        <div className="lg:col-span-2 space-y-6">
          <div className="bg-[#1E293B] border border-gray-700 rounded-2xl p-6 shadow-xl">
            <h2 className="text-xl font-bold mb-1">🧮 Earnings & Commission Simulator</h2>
            <p className="text-xs text-gray-400 mb-6">Adjust the numbers to preview your estimated monthly revenue.</p>
            <div className="grid md:grid-cols-2 gap-6">
              <div className="space-y-4">
                <div><label className="text-xs text-gray-400">Monthly Traffic</label><input type="number" value={traffic} onChange={e=>setTraffic(Number(e.target.value))} className="w-full bg-[#0F172A] border border-gray-700 rounded-xl px-4 py-2.5 mt-1" /></div>
                <div><label className="text-xs text-gray-400">Conversion Rate %</label><input type="number" step="0.1" value={conversion} onChange={e=>setConversion(Number(e.target.value))} className="w-full bg-[#0F172A] border border-gray-700 rounded-xl px-4 py-2.5 mt-1" /></div>
                <div><label className="text-xs text-gray-400">Product Price / Year ($)</label><input type="number" value={price} onChange={e=>setPrice(Number(e.target.value))} className="w-full bg-[#0F172A] border border-gray-700 rounded-xl px-4 py-2.5 mt-1" /></div>
                <div><label className="text-xs text-gray-400">Your Commission %</label><input type="number" value={commission} onChange={e=>setCommission(Number(e.target.value))} className="w-full bg-[#0F172A] border border-gray-700 rounded-xl px-4 py-2.5 mt-1" /></div>
              </div>
              <div className="bg-[#0F172A] border border-gray-700 rounded-2xl p-6 flex flex-col justify-center text-center">
                <span className="text-xs text-gray-400 uppercase tracking-wider">Expected Sales</span><h3 className="text-2xl font-bold mt-1">{totalSales.toLocaleString()} sales</h3>
                <div className="my-6"><span className="text-xs text-indigo-400 uppercase tracking-wider">Your Net Monthly Earnings</span><h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradient-to-r from-green-400 to-emerald-500 mt-1">${netEarnings.toLocaleString()}</h2></div>
                <p className="text-[11px] text-gray-500">Based on standard conversion rates for design & media niches.</p>
              </div>
            </div>
          </div>

          <div className="bg-[#1E293B] border border-gray-700 rounded-2xl p-6 shadow-xl">
            <h2 className="font-bold mb-4">🔗 Your Affiliate Link Manager</h2>
            <form onSubmit={addLink} className="grid md:grid-cols-3 gap-3 mb-6">
              <input value={progName} onChange={e=>setProgName(e.target.value)} placeholder="Program Name (e.g. Figma)" className="bg-[#0F172A] border border-gray-700 rounded-xl px-4 py-2 text-sm" />
              <input value={rawUrl} onChange={e=>setRawUrl(e.target.value)} placeholder="Paste affiliate link here" className="bg-[#0F172A] border border-gray-700 rounded-xl px-4 py-2 text-sm" />
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-sm py-2 font-medium">+ Save Link</button>
            </form>
            <div className="overflow-x-auto">
              <table className="w-full text-xs text-left">
                <thead><tr className="border-b border-gray-700 text-gray-400"><th className="pb-3">Platform</th><th className="pb-3">Generated Link</th><th className="pb-3 text-right">Action</th></tr></thead>
                <tbody className="divide-y divide-gray-700/50">{links.map((l,i)=><tr key={i}><td className="py-3 font-medium">{l.name}</td><td className="py-3 text-gray-400 truncate max-w-[200px]">{l.url}</td><td className="py-3 text-right"><button onClick={()=>copyLink(l.url)} className="text-indigo-400 bg-indigo-500/10 px-3 py-1 rounded border border-indigo-500/20 hover:bg-indigo-500/20">Copy</button></td></tr>)}</tbody>
              </table>
            </div>
          </div>
        </div>
      </main>
    </div>
  )
}
