"use client"
import { useState, useEffect } from 'react'

export default function AffiliateHubPage() {
  const [traffic, setTraffic] = useState(5000)
  const [conversion, setConversion] = useState(2)
  const [price, setPrice] = useState(120)
  const [commission, setCommission] = useState(25)
  const [links, setLinks] = useState<{name:string, url:string}[]>([
    { name: 'Adobe Creative Cloud', url: 'https://adobe.com/ref?id=user99' }
  ])
  const [progName, setProgName] = useState('')
  const [rawUrl, setRawUrl] = useState('')

  // Load / Save from browser
  useEffect(() => {
    const saved = localStorage.getItem('affiliate-links')
    if (saved) setLinks(JSON.parse(saved))
  }, [])
  useEffect(() => {
    localStorage.setItem('affiliate-links', JSON.stringify(links))
  }, [links])

  const totalSales = Math.round(traffic * (conversion / 100))
  const netEarnings = totalSales * price * (commission / 100)

  const addLink = (e: any) => {
    e.preventDefault()
    if (!progName ||!rawUrl) return
    setLinks([...links, { name: progName, url: rawUrl }])
    setProgName(''); setRawUrl('')
  }

  const copyLink = (url: string) => {
    navigator.clipboard.writeText(url)
    alert('Link copied!')
  }

  const deleteLink = (index: number) => {
    setLinks(links.filter((_, i) => i!== index))
  }

  const exportCSV = () => {
    const header = "Platform,Affiliate Link\n"
    const rows = links.map(l => `"${l.name}","${l.url}"`).join("\n")
    const blob = new Blob([header + rows], { type: 'text/csv' })
    const url = window.URL.createObjectURL(blob)
    const a = document.createElement('a')
    a.href = url; a.download = `affiliate-links-${new Date().toISOString().slice(0,10)}.csv`
    a.click()
  }

  return (
    <div className="bg-[#0F172A] text-gray-100 min-h-screen">
      <nav className="bg-[#1E293B] border-b border-gray-700 px-6 py-4 flex justify-between items-center">
        <div className="flex items-center gap-3">
          <div className="bg-indigo-600 p-2 rounded-lg font-bold">AI</div>
          <span className="text-xl font-bold">AffiliateHub <span className="text-indigo-400">AI</span></span>
        </div>
        <div className="flex gap-2">
          <button onClick={exportCSV} className="bg-gray-700 hover:bg-gray-600 px-4 py-1.5 rounded-full text-xs font-medium">⬇ Export CSV</button>
          <span className="bg-green-500/10 text-green-400 border border-green-500/20 px-3 py-1 rounded-full text-xs flex items-center gap-2">
            <span className="h-2 w-2 rounded-full bg-green-500 animate-pulse"></span> Live
          </span>
        </div>
      </nav>

      <main className="max-w-7xl mx-auto p-4 md:p-8 grid grid-cols-1 lg:grid-cols-3 gap-8">
        <div className="lg:col-span-1 space-y-6">
          <div className="bg-[#1E293B] border border-gray-700 rounded-2xl p-6 shadow-xl">
            <h2 className="font-bold mb-4">🔔 Program Status Monitor</h2>
            <div className="space-y-3">
              <div className="p-3 bg-white/5 rounded-xl flex justify-between items-center"><div><h3 className="text-sm font-medium">Canva (Canvassador)</h3><p className="text-xs text-gray-400">Clo[...]
              <div className="p-3 bg-white/5 rounded-xl flex justify-between items-center"><div><h3 className="text-sm font-medium">Figma Creator</h3><p className="text-xs text-gray-400">Open</p><[...]
              <div className="p-3 bg-white/5 rounded-xl flex justify-between items-center"><div><h3 className="text-sm font-medium">Adobe CC</h3><p className="text-xs text-gray-400">Open</p></div>[...]
            </div>
          </div>
          <div className="bg-gradient-to-br from-indigo-900/30 to-purple-900/30 border border-indigo-500/30 rounded-2xl p-6">
            <h2 className="font-bold mb-2 text-indigo-300">✨ Smart Alternatives</h2>
            <p className="text-xs text-gray-400 mb-4">Since <b>Canva is closed</b>, focus on these:</p>
            <div className="space-y-2 text-xs">
              <div className="bg-[#1E293B] p-3 rounded-lg flex justify-between"><span>Adobe Express</span><span className="text-indigo-400 font-bold">Paid</span></div>
              <div className="bg-[#1E293B] p-3 rounded-lg flex justify-between"><span>Kittl - 30% Recurring</span><span className="text-green-400 font-bold">High Value</span></div>
              <div className="bg-[#1E293B] p-3 rounded-lg flex justify-between"><span>Shopify Affiliate - $150/sale</span><span className="text-green-400 font-bold">Best ROI</span></div>
            </div>
          </div>
        </div>

        <div className="lg:col-span-2 space-y-6">
          <div className="bg-[#1E293B] border border-gray-700 rounded-2xl p-6 shadow-xl">
            <h2 className="text-xl font-bold mb-1">🧮 Earnings Simulator</h2>
            <div className="grid md:grid-cols-2 gap-6 mt-6">
              <div className="space-y-4">
                <div><label className="text-xs text-gray-400">Monthly Traffic</label><input type="number" value={traffic} onChange={e=>setTraffic(Number(e.target.value))} className="w-full bg-[#0F[...]
                <div><label className="text-xs text-gray-400">Conversion Rate %</label><input type="number" step="0.1" value={conversion} onChange={e=>setConversion(Number(e.target.value))} classN[...]
                <div><label className="text-xs text-gray-400">Product Price / Year ($)</label><input type="number" value={price} onChange={e=>setPrice(Number(e.target.value))} className="w-full bg[...]
                <div><label className="text-xs text-gray-400">Your Commission %</label><input type="number" value={commission} onChange={e=>setCommission(Number(e.target.value))} className="w-full[...]
              </div>
              <div className="bg-[#0F172A] border border-gray-700 rounded-2xl p-6 flex flex-col justify-center text-center">
                <span className="text-xs text-gray-400 uppercase">Expected Sales</span><h3 className="text-2xl font-bold mt-1">{totalSales.toLocaleString()} sales</h3>
                <div className="my-6"><span className="text-xs text-indigo-400 uppercase">Net Monthly Earnings</span><h2 className="text-4xl font-extrabold text-transparent bg-clip-text bg-gradie[...]
              </div>
            </div>
          </div>

          <div className="bg-[#1E293B] border border-gray-700 rounded-2xl p-6 shadow-xl">
            <div className="flex justify-between items-center mb-4">
              <h2 className="font-bold">🔗 Link Manager ({links.length})</h2>
              <button onClick={exportCSV} className="text-xs bg-indigo-600 hover:bg-indigo-700 px-3 py-1.5 rounded-lg">Export to Excel</button>
            </div>
            <form onSubmit={addLink} className="grid md:grid-cols-3 gap-3 mb-6">
              <input value={progName} onChange={e=>setProgName(e.target.value)} placeholder="Program Name" className="bg-[#0F172A] border border-gray-700 rounded-xl px-4 py-2 text-sm" required />
              <input value={rawUrl} onChange={e=>setRawUrl(e.target.value)} placeholder="https://..." className="bg-[#0F172A] border border-gray-700 rounded-xl px-4 py-2 text-sm" required />
              <button className="bg-emerald-600 hover:bg-emerald-700 text-white rounded-xl text-sm py-2 font-medium">+ Save Link</button>
            </form>
            <table className="w-full text-xs text-left">
              <thead><tr className="border-b border-gray-700 text-gray-400"><th className="pb-3">Platform</th><th className="pb-3">Link</th><th className="pb-3 text-right">Actions</th></tr></thea[...]
              <tbody className="divide-y divide-gray-700/50">
                {links.map((l,i)=><tr key={i}><td className="py-3 font-medium">{l.name}</td><td className="py-3 text-gray-400 truncate max-w-[200px]">{l.url}</td><td className="py-3 text-right fl[...]
              </tbody>
            </table>
          </div>
        </div>

        <section className="my-12 px-4 max-w-7xl mx-auto" dir="rtl">
  <div className="text-center mb-8">
    <h2 className="text-3xl font-bold text-gray-800">أفضل أدوات الذكاء الاصطناعي للتسويق</h2>
    <p className="text-gray-600 mt-2">مجموعة من الأدوات الاحترافية التي نوصي بها لزيادة مبيعاتك وتطوير عملك</p>
  </div>
  
  <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
    
    {/* الأداة 1: AdCreative */}
    <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-transform hover:-translate-y-1 bg-white">
      <img src="https://via.placeholder.com/400x200/000000/FFFFFF?text=AdCreative.ai" alt="AdCreative AI" className="w-full h-48 object-cover" />
      <div className="p-5 text-center">
        <h3 className="text-xl font-bold text-gray-900 mb-2">AdCreative.ai</h3>
        <p className="text-sm text-gray-600 mb-5">أداة ذكية لتوليد مئات التصاميم الإعلانية عالية التحويل في ثواني بدون خبرة.</p>
        <a href="https://eclectic-khapse-bff2be.netlify.app/" className="inline-block bg-blue-600 text-white py-2 px-5 rounded-md font-bold hover:bg-blue-700 transition-colors">اكتشف الأداة</a> 
      </div>
    </div>

    {/* الأداة 2: Jasper AI */}
    <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-transform hover:-translate-y-1 bg-white">
      <img src="https://via.placeholder.com/400x200/4B0082/FFFFFF?text=Jasper.ai" alt="Jasper AI" className="w-full h-48 object-cover" />
      <div className="p-5 text-center">
        <h3 className="text-xl font-bold text-gray-900 mb-2">Jasper AI</h3>
        <p className="text-sm text-gray-600 mb-5">مساعد الكتابة بالذكاء الاصطناعي. يكتب لك إعلانات ووصف منتجات احترافي.</p>
        <a href="#" className="inline-block bg-blue-600 text-white py-2 px-5 rounded-md font-bold hover:bg-blue-700 transition-colors">اكتشف الأداة</a> 
      </div>
    </div>

    {/* الأداة 3: Systeme.io */}
    <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-transform hover:-translate-y-1 bg-white">
      <img src="https://via.placeholder.com/400x200/0073e6/FFFFFF?text=Systeme.io" alt="Systeme.io" className="w-full h-48 object-cover" />
      <div className="p-5 text-center">
        <h3 className="text-xl font-bold text-gray-900 mb-2">Systeme.io</h3>
        <p className="text-sm text-gray-600 mb-5">المنصة المتكاملة الأسهل لبناء مسارات المبيعات وحملات البريد مجاناً.</p>
        <a href="#" className="inline-block bg-blue-600 text-white py-2 px-5 rounded-md font-bold hover:bg-blue-700 transition-colors">اكتشف الأداة</a> 
      </div>
    </div>

    {/* الأداة 4: ElevenLabs */}
    <div className="border border-gray-200 rounded-lg overflow-hidden shadow-sm hover:shadow-lg transition-transform hover:-translate-y-1 bg-white">
      <img src="https://via.placeholder.com/400x200/333333/FFFFFF?text=ElevenLabs" alt="ElevenLabs" className="w-full h-48 object-cover" />
      <div className="p-5 text-center">
        <h3 className="text-xl font-bold text-gray-900 mb-2">ElevenLabs</h3>
        <p className="text-sm text-gray-600 mb-5">أفضل أداة لتحويل النص إلى صوت بشري واقعي لإنشاء فيديوهات تسويقية.</p>
        <a href="#" className="inline-block bg-blue-600 text-white py-2 px-5 rounded-md font-bold hover:bg-blue-700 transition-colors">اكتشف الأداة</a> 
      </div>
    </div>

  </div>
</section>

      </main>
    </div>
  )
}
