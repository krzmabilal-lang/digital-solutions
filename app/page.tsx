"use client";

import { useState, useEffect } from 'react';
import Image from 'next/image';

export default function Home() {
  const [progName, setProgName] = useState('');
  const [rawUrl, setRawUrl] = useState('');
  const [links, setLinks] = useState([]);

  const defaultToolsData = [
    { id: 1, name: 'AdCreative', likes: 125, dislikes: 8, comments: [], showComment: false },
    { id: 2, name: 'Jasper AI', likes: 98, dislikes: 12, comments: [], showComment: false },
    { id: 3, name: 'Systeme.io', likes: 210, dislikes: 5, comments: [], showComment: false },
    { id: 4, name: 'ElevenLabs', likes: 76, dislikes: 3, comments: [], showComment: false },
    { id: 5, name: 'صفحات الهبوط', likes: 342, dislikes: 15, comments: [], showComment: false },
    { id: 6, name: 'مميزاتنا', likes: 189, dislikes: 7, comments: [], showComment: false },
  ];

  const [toolsData, setToolsData] = useState(defaultToolsData);
  const [newComment, setNewComment] = useState('');
  const [userName, setUserName] = useState('');
  const [copiedId, setCopiedId] = useState(null);

  // نقراو من localStorage ملي الصفحة كتتشارجا
  useEffect(() => {
    const savedData = localStorage.getItem('toolsInteractions');
    if (savedData) {
      setToolsData(JSON.parse(savedData));
    }

    // نقراو اسم المستخدم يلا كان محفوظ
    const savedName = localStorage.getItem('userName');
    if (savedName) setUserName(savedName);
  }, []);

  // نحفظو فـ localStorage ملي toolsData كيتبدل
  useEffect(() => {
    localStorage.setItem('toolsInteractions', JSON.stringify(toolsData));
  }, [toolsData]);

  // نحفظو اسم المستخدم
  useEffect(() => {
    if (userName) localStorage.setItem('userName', userName);
  }, [userName]);

  const exportCSV = () => {
    console.log("Export CSV");
  };

  const addLink = (e: React.FormEvent<HTMLFormElement>) => {
  e.preventDefault();
  if (progName && rawUrl) {
    setLinks([...links, { name: progName, url: rawUrl }]);
    setProgName('');
    setRawUrl('');
  }


  const handleLike = (id) => {
    setToolsData(toolsData.map(tool => 
      tool.id === id? {...tool, likes: tool.likes + 1 } : tool
    ));
  };

  const handleDislike = (id) => {
    setToolsData(toolsData.map(tool => 
      tool.id === id? {...tool, dislikes: tool.dislikes + 1 } : tool
    ));
  };

  const handleShare = async (id, toolName) => {
    const url = `https://eclectic-khapse-bff2be.netlify.app/?tool=${toolName}`;
    
    if (navigator.share) {
      try {
        await navigator.share({
          title: toolName,
          text: `شوف هاد الأداة: ${toolName}`,
          url: url,
        });
      } catch (err) {
        console.log('المشاركة تلغات');
      }
    } else {
      navigator.clipboard.writeText(url);
      setCopiedId(id);
      setTimeout(() => setCopiedId(null), 2000);
    }
  };

  const toggleCommentBox = (id) => {
    setToolsData(toolsData.map(tool => 
      tool.id === id? {...tool, showComment:!tool.showComment } : tool
    ));
  };

  const addComment = (id) => {
    if (newComment.trim() === '' || userName.trim() === '') {
      alert('عمر الاسم والتعليق عفاك');
      return;
    }
    
    const commentData = {
      id: Date.now(),
      name: userName.trim(),
      text: newComment.trim(),
      date: new Date().toLocaleDateString('ar-MA', { 
        year: 'numeric', 
        month: 'short', 
        day: 'numeric',
        hour: '2-digit',
        minute: '2-digit'
      })
    };

    setToolsData(toolsData.map(tool => 
      tool.id === id 
    ? {...tool, comments: [...tool.comments, commentData], showComment: false } 
        : tool
    ));
    setNewComment('');
  };

  const ToolCard = ({ tool, children }) => {
    const toolData = toolsData.find(t => t.id === tool.id);
    
    return (
      <div className="border border-gray-200 rounded-lg overflow-hidden shadow hover:shadow-xl transition-all duration-300 hover:-translate-y-1 bg-white">
        {children}
        <div className="p-5">
          <div className="flex justify-between items-center mt-4 pt-4 border-t border-gray-100">
            <button 
              onClick={() => handleLike(tool.id)}
              className="flex items-center gap-1 text-gray-600 hover:text-blue-600 transition active:scale-95"
            >
              <span className="text-lg">👍</span>
              <span className="font-bold text-sm">{toolData.likes}</span>
            </button>

            <button 
              onClick={() => handleDislike(tool.id)}
              className="flex items-center gap-1 text-gray-600 hover:text-red-600 transition active:scale-95"
            >
              <span className="text-lg">👎</span>
              <span className="font-bold text-sm">{toolData.dislikes}</span>
            </button>
            
            <button 
              onClick={() => toggleCommentBox(tool.id)}
              className="flex items-center gap-1 text-gray-600 hover:text-blue-600 transition active:scale-95"
            >
              <span className="text-lg">💬</span>
              <span className="font-bold text-sm">{toolData.comments.length}</span>
            </button>

            <button 
              onClick={() => handleShare(tool.id, toolData.name)}
              className="flex items-center gap-1 text-gray-600 hover:text-green-600 transition active:scale-95 relative"
            >
              <span className="text-lg">🔗</span>
              <span className="font-bold text-sm">
                {copiedId === tool.id? 'تم!' : 'شارك'}
              </span>
            </button>
          </div>

          {toolData.showComment && (
            <div className="mt-4 space-y-2">
              <input
                type="text"
                value={userName}
                onChange={(e) => setUserName(e.target.value)}
                placeholder="اسمك..."
                className="w-full border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="flex gap-2">
                <input
                  type="text"
                  value={newComment}
                  onChange={(e) => setNewComment(e.target.value)}
                  placeholder="اكتب تعليقك..."
                  className="flex-1 border border-gray-300 rounded px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
                  onKeyPress={(e) => e.key === 'Enter' && addComment(tool.id)}
                />
                <button 
                  onClick={() => addComment(tool.id)}
                  className="bg-blue-600 text-white px-4 py-2 rounded text-sm hover:bg-blue-700 active:scale-95"
                >
                  أرسل
                </button>
              </div>
            </div>
          )}

          {toolData.comments.length > 0 && (
            <div className="mt-4 space-y-3 max-h-40 overflow-y-auto">
              {toolData.comments.map((comment) => (
                <div key={comment.id} className="bg-gray-50 p-3 rounded text-sm border-r-2 border-blue-500">
                  <div className="flex justify-between items-center mb-1">
                    <span className="font-bold text-blue-600">{comment.name}</span>
                    <span className="text-xs text-gray-500">{comment.date}</span>
                  </div>
                  <p className="text-gray-700 text-right">{comment.text}</p>
                </div>
              ))}
            </div>
          )}
        </div>
      </div>
    );
  };

  return (
    <main>
      <section className="relative w-full h-[400px] md:h-[500px] mb-12">
        <Image
          src="/images/digital-solutions-hero.jpg"
          alt="Digital Solutions"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-black/70 to-blue-900/50 flex items-center justify-center">
          <div className="text-center text-white px-4" dir="rtl">
            <h1 className="text-4xl md:text-6xl font-bold mb-4">Digital Solutions</h1>
            <p className="text-lg md:text-2xl mb-6">الطريقة الأذكى لتنمية أعمالك</p>
            <a href="https://eclectic-khapse-bff2be.netlify.app/" target="_blank" rel="noopener noreferrer"
              className="inline-block bg-blue-600 hover:bg-blue-700 text-white py-3 px-8 rounded-lg text-lg font-bold transition">
              ابدأ الآن مجاناً
            </a>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4">
        <div className="bg-[#0F172A] border border-gray-700 rounded-2xl p-6 mb-8">
          <div className="flex justify-between items-center mb-4">
            <h2 className="font-bold text-white">🔗 Link Manager ({links.length})</h2>
            <button onClick={exportCSV} className="text-xs bg-indigo-600 hover:bg-indigo-700 text-white px-3 py-1 rounded">
              Export CSV
            </button>
          </div>
          <form onSubmit={addLink} className="grid md:grid-cols-3 gap-4">
            <input value={progName} onChange={(e) => setProgName(e.target.value)} placeholder="اسم البرنامج" className="bg-gray-800 text-white p-2 rounded" />
            <input value={rawUrl} onChange={(e) => setRawUrl(e.target.value)} placeholder="الرابط" className="bg-gray-800 text-white p-2 rounded" />
            <button className="bg-emerald-600 hover:bg-emerald-700 text-white p-2 rounded">أضف الرابط</button>
          </form>
        </div>
      </div>

      <section className="my-12 px-4 max-w-7xl mx-auto" dir="rtl">
        <div className="text-center mb-8">
          <h2 className="text-3xl font-bold text-gray-800">أدوات الذكاء الاصطناعي للتسويق</h2>
          <p className="text-gray-600 mt-2">شاركنا رأيك - التعليقات محفوظة باسمك</p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          <ToolCard tool={{ id: 1 }}>
            <img src="https://via.placeholder.com/400x200/000000/FFFFFF?text=AdCreative" alt="AdCreative" className="w-full h-40 object-cover" />
            <div className="p-5 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-2">AdCreative</h3>
              <p className="text-sm text-gray-600 mb-3">زيادة التحويل في ثواني بدون خبرة</p>
              <a href="https://eclectic-khapse-bff2be.netlify.app/" target="_blank" className="inline-block bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700">جرب الآن</a>
            </div>
          </ToolCard>

          <ToolCard tool={{ id: 2 }}>
            <img src="https://via.placeholder.com/400x200/4B0082/FFFFFF?text=Jasper" alt="Jasper AI" className="w-full h-40 object-cover" />
            <div className="p-5 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Jasper AI</h3>
              <p className="text-sm text-gray-600 mb-3">إعلانات ووصف منتجات احترافي</p>
              <a href="#" className="inline-block bg-purple-600 text-white py-2 px-6 rounded hover:bg-purple-700">جرب الآن</a>
            </div>
          </ToolCard>

          <ToolCard tool={{ id: 3 }}>
            <img src="https://via.placeholder.com/400x200/0073e6/FFFFFF?text=Systeme" alt="Systeme.io" className="w-full h-40 object-cover" />
            <div className="p-5 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-2">Systeme.io</h3>
              <p className="text-sm text-gray-600 mb-3">إنشاء المبيعات وحملات البريد مجاناً</p>
              <a href="#" className="inline-block bg-cyan-600 text-white py-2 px-6 rounded hover:bg-cyan-700">جرب الآن</a>
            </div>
          </ToolCard>

          <ToolCard tool={{ id: 4 }}>
            <img src="https://via.placeholder.com/400x200/333333/FFFFFF?text=ElevenLabs" alt="ElevenLabs" className="w-full h-40 object-cover" />
            <div className="p-5 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-2">ElevenLabs</h3>
              <p className="text-sm text-gray-600 mb-3">صوت واقعي لإنشاء فيديوهات تسويقية</p>
              <a href="#" className="inline-block bg-gray-800 text-white py-2 px-6 rounded hover:bg-gray-900">جرب الآن</a>
            </div>
          </ToolCard>

          <ToolCard tool={{ id: 5 }}>
            <img src="/images/digital-solutions-hero.jpg" alt="صفحات الهبوط" className="w-full h-40 object-cover" />
            <div className="p-5 text-center">
              <h3 className="text-xl font-bold text-gray-900 mb-2">صفحات الهبوط</h3>
              <p className="text-sm text-gray-600 mb-3">قوالب جاهزة مثل Digital Solutions</p>
              <a href="https://eclectic-khapse-bff2be.netlify.app/" target="_blank" rel="noopener noreferrer" className="inline-block bg-blue-600 text-white py-2 px-6 rounded hover:bg-blue-700">شاهد القوالب</a>
            </div>
          </ToolCard>

          <ToolCard tool={{ id: 6 }}>
            <div className="p-5 text-center bg-gradient-to-br from-blue-50 to-indigo-100 h-full">
              <h3 className="text-xl font-bold text-gray-900 mb-4">مميزاتنا الحصرية</h3>
              <ul className="text-sm text-right space-y-2 mb-3">
                <li>✅ AI Powered Insights</li>
                <li>✅ Real-Time Analytics</li>
                <li>✅ Lead Generation</li>
                <li>✅ Campaign Automation</li>
              </ul>
              <a href="https://eclectic-khapse-bff2be.netlify.app/" target="_blank" className="inline-block bg-indigo-600 text-white py-2 px-6 rounded hover:bg-indigo-700">اعرف المزيد</a>
            </div>
          </ToolCard>
        </div>
      </section>
    </main>
  );
}
