import React, { useState, useEffect, useRef } from 'react';
import {
  Flame,
  Globe,
  Mic,
  User,
  Radio,
  Settings,
  Heart,
  Send,
  Gift,
  X,
  Search,
  Plus,
  Volume2,
  VolumeX,
  Shield,
  Wallet,
  LogOut,
  Languages,
  Sparkles,
  Share2,
  Camera,
  Check,
  Award,
  Video,
  Grid,
  ChevronRight,
  TrendingUp,
  MessageCircle,
  Play,
  ArrowUpRight,
  Sliders,
  DollarSign
} from 'lucide-react';

const MOCK_STREAMERS = [
  {
    id: 's1',
    name: 'Katrina Live',
    handle: '@katrina_20',
    country: 'Россия',
    flag: '🇷🇺',
    category: 'Музыка & Чат',
    viewers: 2840,
    diamonds: 45200,
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=400&auto=format&fit=crop&q=80',
    cover: 'https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&auto=format&fit=crop&q=80',
    bio: 'Пою каверы, общаюсь и дарю улыбки! Залетай на огонек ✨',
    level: 42,
    isLive: true,
  },
  {
    id: 's2',
    name: 'Alex DJ Night',
    handle: '@alex_sound',
    country: 'США',
    flag: '🇺🇸',
    category: 'DJ Сеты',
    viewers: 4120,
    diamonds: 89300,
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=400&auto=format&fit=crop&q=80',
    cover: 'https://images.unsplash.com/photo-1470225620780-dba8ba36b745?w=600&auto=format&fit=crop&q=80',
    bio: 'Deep House & Cyberpunk Vibes 🎧 Live set from Miami!',
    level: 38,
    isLive: true,
  },
  {
    id: 's3',
    name: 'Sakura Anime',
    handle: '@sakura_chan',
    country: 'Япония',
    flag: '🇯🇵',
    category: 'Косплей & Игры',
    viewers: 1950,
    diamonds: 31200,
    avatar: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=400&auto=format&fit=crop&q=80',
    cover: 'https://images.unsplash.com/photo-1563089145-599997674d42?w=600&auto=format&fit=crop&q=80',
    bio: 'Гейминг, аниме фигурки и позитивный вайб каждый день (◕‿◕)',
    level: 29,
    isLive: true,
  },
  {
    id: 's4',
    name: 'Elif Istanbul',
    handle: '@elif_turk',
    country: 'Турция',
    flag: '🇹🇷',
    category: 'Разговоры',
    viewers: 3200,
    diamonds: 67100,
    avatar: 'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=400&auto=format&fit=crop&q=80',
    cover: 'https://images.unsplash.com/photo-1527529482837-4698179dc6ce?w=600&auto=format&fit=crop&q=80',
    bio: 'Ночной Босфор и душевные разговоры при свечах ☕',
    level: 35,
    isLive: true,
  }
];

const MOCK_AUDIO_ROOMS = [
  {
    id: 'ar1',
    title: '🌙 Ночные откровения & Лаундж',
    host: 'Mila Sound',
    avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80',
    listeners: 432,
    category: 'Психология & Чат',
    seats: [
      { name: 'Host Mila', isMuted: false, isSpeaking: true, avatar: 'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&auto=format&fit=crop&q=80' },
      { name: 'Denis_K', isMuted: false, isSpeaking: false, avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&auto=format&fit=crop&q=80' },
      null, null, null, null, null, null
    ]
  },
  {
    id: 'ar2',
    title: '🔥 Рэп Баттл & Фристайл Раунд',
    host: 'MC Beast',
    avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80',
    listeners: 890,
    category: 'Музыка',
    seats: [
      { name: 'MC Beast', isMuted: false, isSpeaking: true, avatar: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&auto=format&fit=crop&q=80' },
      null, null, null, null, null, null, null, null
    ]
  }
];

const GIFTS_CATALOG = [
  { id: 'g1', name: 'Роза', icon: '🌹', cost: 1 },
  { id: 'g2', name: 'Кофе', icon: '☕', cost: 5 },
  { id: 'g3', name: 'Сердце', icon: '💖', cost: 15 },
  { id: 'g4', name: 'Корона', icon: '👑', cost: 99 },
  { id: 'g5', name: 'Спорткар', icon: '🏎', cost: 499 },
  { id: 'g6', name: 'Ракета', icon: '🚀', cost: 999 }
];

const COUNTRIES = [
  { name: 'Все страны', code: 'ALL', flag: '🌍' },
  { name: 'Россия', code: 'RU', flag: '🇷🇺' },
  { name: 'США', code: 'US', flag: '🇺🇸' },
  { name: 'Турция', code: 'TR', flag: '🇹🇷' },
  { name: 'Япония', code: 'JP', flag: '🇯🇵' },
  { name: 'Германия', code: 'DE', flag: '🇩🇪' }
];

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [selectedCountry, setSelectedCountry] = useState('ALL');
  const [searchQuery, setSearchQuery] = useState('');
  const [activeLiveStream, setActiveLiveStream] = useState(null);
  const [activeAudioRoom, setActiveAudioRoom] = useState(null);
  const [isBroadcasting, setIsBroadcasting] = useState(false);
  const [settingsOpen, setSettingsOpen] = useState(false);
  const [walletModal, setWalletModal] = useState(null);
  const [lang, setLang] = useState('RU');
  const [ghostMode, setGhostMode] = useState(false);

  const [user, setUser] = useState({
    name: 'Лика Романова',
    handle: '@lolylive_star',
    id: 'loly_88921',
    diamonds: 650,
    beans: 1240,
    level: 19,
    followers: 8420,
    following: 114,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=80',
    bio: 'Создаю контент с любовью 💫 Танцы, музыка и хорошее настроение в Loly Live!',
    posts: [
      'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=500&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=500&auto=format&fit=crop&q=80',
      'https://images.unsplash.com/photo-1524504388940-b1c1722653e1?w=500&auto=format&fit=crop&q=80'
    ]
  });

  const [toastMessage, setToastMessage] = useState(null);
  const showToast = (msg) => {
    setToastMessage(msg);
    setTimeout(() => setToastMessage(null), 3000);
  };

  const [streamChat, setStreamChat] = useState([
    { id: 1, user: 'Artem_Top', text: 'Всем привет! Классный стрим 😍', badge: 'LV.12' },
    { id: 2, user: 'Danil_VIP', text: 'Какой трек играет?', badge: 'VIP' },
  ]);
  const [chatInput, setChatInput] = useState('');
  const [heartsList, setHeartsList] = useState([]);
  const [showGiftDrawer, setShowGiftDrawer] = useState(false);
  const chatScrollRef = useRef(null);

  useEffect(() => {
    if (chatScrollRef.current) {
      chatScrollRef.current.scrollTop = chatScrollRef.current.scrollHeight;
    }
  }, [streamChat]);

  const triggerHeartAnimation = () => {
    const newHeart = {
      id: Date.now() + Math.random(),
      left: 50 + (Math.random() * 40 - 20)
    };
    setHeartsList(prev => [...prev, newHeart]);
    setTimeout(() => {
      setHeartsList(prev => prev.filter(h => h.id !== newHeart.id));
    }, 1800);
  };

  const handleSendChat = (e) => {
    e.preventDefault();
    if (!chatInput.trim()) return;
    setStreamChat(prev => [
      ...prev,
      {
        id: Date.now(),
        user: user.name,
        text: chatInput.trim(),
        badge: `LV.${user.level}`,
        isMe: true
      }
    ]);
    setChatInput('');
    triggerHeartAnimation();
  };

  const handleSendGift = (gift) => {
    if (user.diamonds < gift.cost) {
      showToast('Недостаточно алмазов! Пополните баланс 💎');
      return;
    }
    setUser(prev => ({ ...prev, diamonds: prev.diamonds - gift.cost }));
    setShowGiftDrawer(false);
    setStreamChat(prev => [
      ...prev,
      {
        id: Date.now(),
        user: user.name,
        text: `подарил(а) ${gift.name} ${gift.icon}!`,
        isGift: true,
        badge: 'VIP'
      }
    ]);
    showToast(`Вы подарили ${gift.name} ${gift.icon}`);
  };

  const filteredStreamers = MOCK_STREAMERS.filter(s => {
    const matchesCountry = selectedCountry === 'ALL' || s.country === COUNTRIES.find(c => c.code === selectedCountry)?.name;
    const matchesSearch = s.name.toLowerCase().includes(searchQuery.toLowerCase()) ||
                          s.category.toLowerCase().includes(searchQuery.toLowerCase());
    return matchesCountry && matchesSearch;
  });

  return (
    <div className="flex justify-center items-center h-[100dvh] bg-black font-sans text-slate-100 select-none">
      <div className="relative w-full h-full max-w-md bg-neutral-900 overflow-hidden flex flex-col justify-between">
        
        {toastMessage && (
          <div className="absolute top-12 left-4 right-4 z-[999] bg-gradient-to-r from-pink-600 to-purple-600 text-white text-xs font-semibold py-2 px-4 rounded-xl shadow-lg flex items-center justify-center gap-2">
            <Sparkles className="w-4 h-4 text-yellow-300" />
            <span>{toastMessage}</span>
          </div>
        )}

        {/* Header */}
        <header className="relative z-30 pt-3 px-4 pb-2 bg-neutral-950/90 backdrop-blur-md flex items-center justify-between">
          <div className="flex items-center gap-2">
            <div className="w-8 h-8 rounded-full bg-gradient-to-tr from-cyan-400 via-pink-500 to-yellow-400 flex items-center justify-center p-0.5">
              <div className="w-full h-full bg-neutral-900 rounded-full flex items-center justify-center font-black text-xs text-pink-400">
                L
              </div>
            </div>
            <span className="font-extrabold text-lg tracking-tight bg-gradient-to-r from-pink-400 via-purple-300 to-cyan-300 bg-clip-text text-transparent">
              Loly live
            </span>
          </div>

          <div className="flex items-center gap-2">
            <button 
              onClick={() => { setSettingsOpen(true); setWalletModal('deposit'); }}
              className="flex items-center gap-1.5 px-2.5 py-1 rounded-full bg-neutral-800 border border-neutral-700 active:scale-95"
            >
              <span className="text-xs">💎</span>
              <span className="text-xs font-bold text-amber-300">{user.diamonds}</span>
              <span className="text-[10px] text-pink-400 font-black">+</span>
            </button>
            <button
              onClick={() => setSettingsOpen(true)}
              className="w-8 h-8 rounded-full bg-neutral-800 text-neutral-300 flex items-center justify-center active:scale-90"
            >
              <Settings className="w-4 h-4 text-neutral-300" />
            </button>
          </div>
        </header>

        {/* Content */}
        <main className="flex-1 overflow-y-auto no-scrollbar relative">
          {activeTab === 'home' && (
            <div className="p-3 space-y-3 pb-20">
              <div 
                onClick={() => setActiveLiveStream(MOCK_STREAMERS[0])}
                className="relative h-44 rounded-2xl overflow-hidden cursor-pointer shadow-xl border border-neutral-800"
              >
                <img src={MOCK_STREAMERS[0].cover} alt="Cover" className="w-full h-full object-cover" />
                <div className="absolute inset-0 bg-gradient-to-t from-black via-black/30 to-transparent" />
                <div className="absolute top-3 left-3 px-2 py-0.5 rounded-full bg-red-600 text-white text-[10px] font-black uppercase tracking-wider">
                  ТОП ЭФИР
                </div>
                <div className="absolute bottom-3 left-3 right-3 flex items-center justify-between">
                  <div className="flex items-center gap-2">
                    <img src={MOCK_STREAMERS[0].avatar} alt="Avatar" className="w-9 h-9 rounded-full border-2 border-pink-500 object-cover" />
                    <div>
                      <div className="font-bold text-xs text-white">{MOCK_STREAMERS[0].name} {MOCK_STREAMERS[0].flag}</div>
                      <div className="text-[10px] text-neutral-300 truncate max-w-[180px]">{MOCK_STREAMERS[0].bio}</div>
                    </div>
                  </div>
                  <div className="w-8 h-8 rounded-full bg-pink-500 text-white flex items-center justify-center">
                    <Play className="w-4 h-4 fill-white ml-0.5" />
                  </div>
                </div>
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                {MOCK_STREAMERS.map((s) => (
                  <div
                    key={s.id}
                    onClick={() => setActiveLiveStream(s)}
                    className="relative h-48 rounded-xl overflow-hidden cursor-pointer bg-neutral-800 shadow-md border border-neutral-800 active:scale-95 transition"
                  >
                    <img src={s.cover} alt={s.name} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute top-2 left-2 px-1.5 py-0.5 rounded-full bg-black/60 text-white text-[9px]">
                      {s.flag} {s.country}
                    </div>
                    <div className="absolute bottom-2 left-2 right-2">
                      <div className="text-xs font-bold text-white truncate">{s.name}</div>
                      <div className="text-[10px] text-pink-300">{s.category}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'countries' && (
            <div className="p-3 space-y-3 pb-20">
              <div className="relative">
                <Search className="w-4 h-4 absolute left-3 top-3 text-neutral-400" />
                <input
                  type="text"
                  placeholder="Поиск по имени или категории..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-9 pr-4 py-2 text-xs bg-neutral-800 border border-neutral-700 rounded-xl text-neutral-200 placeholder-neutral-500 focus:outline-none focus:border-cyan-400"
                />
              </div>

              <div className="flex gap-2 overflow-x-auto no-scrollbar py-1">
                {COUNTRIES.map((c) => (
                  <button
                    key={c.code}
                    onClick={() => setSelectedCountry(c.code)}
                    className={`flex items-center gap-1.5 px-3 py-1.5 rounded-full text-xs font-semibold whitespace-nowrap transition ${
                      selectedCountry === c.code ? 'bg-cyan-500 text-neutral-950 font-bold' : 'bg-neutral-800 text-neutral-300'
                    }`}
                  >
                    <span>{c.flag}</span>
                    <span>{c.name}</span>
                  </button>
                ))}
              </div>

              <div className="grid grid-cols-2 gap-2.5">
                {filteredStreamers.map((s) => (
                  <div
                    key={s.id}
                    onClick={() => setActiveLiveStream(s)}
                    className="relative h-44 rounded-xl overflow-hidden cursor-pointer bg-neutral-800 border border-neutral-800"
                  >
                    <img src={s.cover} alt={s.name} className="w-full h-full object-cover" />
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-transparent to-transparent" />
                    <div className="absolute bottom-2 left-2 right-2">
                      <div className="text-xs font-bold text-white truncate">{s.name}</div>
                      <div className="text-[10px] text-cyan-300">{s.category}</div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'audio' && (
            <div className="p-3 space-y-3 pb-20">
              <div className="flex items-center justify-between">
                <h1 className="text-sm font-bold text-neutral-100 flex items-center gap-2">
                  <Mic className="w-4 h-4 text-purple-400" /> Аудио комнаты
                </h1>
                <button 
                  onClick={() => showToast('Комната доступна с 5-го уровня 🌟')}
                  className="px-2.5 py-1 text-xs rounded-full bg-gradient-to-r from-purple-500 to-pink-500 text-white font-semibold flex items-center gap-1"
                >
                  <Plus className="w-3.5 h-3.5" /> Создать
                </button>
              </div>

              <div className="space-y-3">
                {MOCK_AUDIO_ROOMS.map((room) => (
                  <div
                    key={room.id}
                    onClick={() => setActiveAudioRoom(room)}
                    className="p-3 rounded-2xl bg-neutral-800/80 border border-neutral-700 cursor-pointer active:scale-98 transition"
                  >
                    <div className="flex items-center gap-3">
                      <img src={room.avatar} alt="Host" className="w-12 h-12 rounded-xl object-cover border border-purple-500" />
                      <div>
                        <h3 className="text-xs font-bold text-white">{room.title}</h3>
                        <div className="text-[10px] text-neutral-400 mt-0.5">Ведущий: {room.host}</div>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          )}

          {activeTab === 'profile' && (
            <div className="pb-24">
              <div className="relative h-28 bg-gradient-to-r from-purple-900 to-pink-900">
                <div className="absolute -bottom-6 left-4 flex items-end gap-3">
                  <img src={user.avatar} alt="Avatar" className="w-18 h-18 rounded-2xl object-cover border-4 border-neutral-900" />
                  <div className="pb-1">
                    <div className="text-sm font-bold text-white flex items-center gap-1">
                      {user.name} <Check className="w-3 h-3 text-cyan-400" />
                    </div>
                    <div className="text-[10px] text-neutral-400 font-mono">ID: {user.id}</div>
                  </div>
                </div>
              </div>

              <div className="pt-8 px-4 space-y-3">
                <div className="grid grid-cols-3 gap-2 text-center py-2 bg-neutral-800/60 rounded-xl">
                  <div>
                    <div className="text-xs font-extrabold text-white">{user.followers}</div>
                    <div className="text-[9px] text-neutral-400">Подписчики</div>
                  </div>
                  <div>
                    <div className="text-xs font-extrabold text-white">{user.following}</div>
                    <div className="text-[9px] text-neutral-400">Подписки</div>
                  </div>
                  <div>
                    <div className="text-xs font-extrabold text-pink-400">{user.beans}</div>
                    <div className="text-[9px] text-neutral-400">Бобы (доход)</div>
                  </div>
                </div>

                <div className="grid grid-cols-3 gap-1.5">
                  {user.posts.map((img, idx) => (
                    <div key={idx} className="aspect-square rounded-lg overflow-hidden bg-neutral-800">
                      <img src={img} alt="Post" className="w-full h-full object-cover" />
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </main>

        {/* Navigation */}
        <nav className="relative z-30 bg-neutral-950/95 border-t border-neutral-800 px-3 py-2 flex items-center justify-around">
          <button
            onClick={() => setActiveTab('home')}
            className={`flex flex-col items-center gap-0.5 ${activeTab === 'home' ? 'text-pink-400' : 'text-neutral-400'}`}
          >
            <Flame className="w-5 h-5" />
            <span className="text-[10px] font-bold">Эфиры</span>
          </button>

          <button
            onClick={() => setActiveTab('countries')}
            className={`flex flex-col items-center gap-0.5 ${activeTab === 'countries' ? 'text-cyan-400' : 'text-neutral-400'}`}
          >
            <Globe className="w-5 h-5" />
            <span className="text-[10px] font-bold">Страны</span>
          </button>

          <div className="relative -top-3 flex flex-col items-center">
            <button
              onClick={() => setIsBroadcasting(true)}
              className="w-12 h-12 rounded-full bg-gradient-to-tr from-pink-500 via-rose-500 to-amber-400 text-white shadow-lg shadow-pink-500/40 flex items-center justify-center active:scale-95"
            >
              <Radio className="w-6 h-6 animate-pulse" />
            </button>
            <span className="text-[9px] font-bold text-pink-400 mt-0.5">В эфир</span>
          </div>

          <button
            onClick={() => setActiveTab('audio')}
            className={`flex flex-col items-center gap-0.5 ${activeTab === 'audio' ? 'text-purple-400' : 'text-neutral-400'}`}
          >
            <Mic className="w-5 h-5" />
            <span className="text-[10px] font-bold">Аудио</span>
          </button>

          <button
            onClick={() => setActiveTab('profile')}
            className={`flex flex-col items-center gap-0.5 ${activeTab === 'profile' ? 'text-pink-400' : 'text-neutral-400'}`}
          >
            <User className="w-5 h-5" />
            <span className="text-[10px] font-bold">Профиль</span>
          </button>
        </nav>

        {/* Live Stream Fullscreen Modal */}
        {activeLiveStream && (
          <div className="absolute inset-0 z-50 bg-black flex flex-col justify-between">
            <div className="absolute inset-0">
              <img src={activeLiveStream.cover} alt="Stream" className="w-full h-full object-cover filter brightness-75" />
              <div className="absolute inset-0 bg-gradient-to-b from-black/60 via-transparent to-black/80" />
            </div>

            <div className="relative z-10 pt-3 px-3 flex items-center justify-between">
              <div className="flex items-center gap-2 bg-black/50 p-1 pr-3 rounded-full">
                <img src={activeLiveStream.avatar} alt="Avatar" className="w-8 h-8 rounded-full object-cover border border-pink-400" />
                <div>
                  <div className="text-xs font-bold text-white">{activeLiveStream.name}</div>
                  <div className="text-[9px] text-pink-300">💎 {activeLiveStream.diamonds}</div>
                </div>
              </div>
              <button onClick={() => setActiveLiveStream(null)} className="w-8 h-8 rounded-full bg-black/60 text-white flex items-center justify-center">
                <X className="w-4 h-4" />
              </button>
            </div>

            <div className="relative z-10 p-3 space-y-2">
              <div ref={chatScrollRef} className="max-h-36 overflow-y-auto no-scrollbar space-y-1">
                {streamChat.map(m => (
                  <div key={m.id} className="text-xs px-2.5 py-1 rounded-lg bg-black/40 text-white inline-block">
                    <span className="text-pink-300 font-bold mr-1">{m.user}:</span>
                    <span>{m.text}</span>
                  </div>
                ))}
              </div>

              <div className="flex items-center gap-2">
                <form onSubmit={handleSendChat} className="flex-1 relative">
                  <input
                    type="text"
                    placeholder="Сообщение в чат..."
                    value={chatInput}
                    onChange={(e) => setChatInput(e.target.value)}
                    className="w-full pl-3 pr-8 py-2 rounded-full bg-black/60 border border-white/20 text-xs text-white"
                  />
                  <button type="submit" className="absolute right-2.5 top-2 text-pink-400">
                    <Send className="w-4 h-4" />
                  </button>
                </form>
                <button onClick={() => setShowGiftDrawer(true)} className="w-9 h-9 rounded-full bg-amber-400 text-neutral-950 flex items-center justify-center">
                  <Gift className="w-5 h-5" />
                </button>
                <button onClick={triggerHeartAnimation} className="w-9 h-9 rounded-full bg-pink-600 text-white flex items-center justify-center active:scale-90">
                  <Heart className="w-5 h-5 fill-white" />
                </button>
              </div>
            </div>

            {showGiftDrawer && (
              <div className="absolute inset-x-0 bottom-0 z-40 bg-neutral-900 border-t border-neutral-700 p-4 rounded-t-3xl">
                <div className="flex items-center justify-between mb-3">
                  <span className="text-xs font-bold text-white">Подарки (Баланс: {user.diamonds} 💎)</span>
                  <button onClick={() => setShowGiftDrawer(false)} className="text-neutral-400"><X className="w-4 h-4" /></button>
                </div>
                <div className="grid grid-cols-3 gap-2">
                  {GIFTS_CATALOG.map(g => (
                    <button key={g.id} onClick={() => handleSendGift(g)} className="p-2 rounded-xl bg-neutral-800 text-center active:scale-95">
                      <div className="text-2xl">{g.icon}</div>
                      <div className="text-xs font-bold text-white">{g.name}</div>
                      <div className="text-[10px] text-amber-300">{g.cost} 💎</div>
                    </button>
                  ))}
                </div>
              </div>
            )}
          </div>
        )}

        {/* Broadcasting Live Studio Modal */}
        {isBroadcasting && (
          <div className="absolute inset-0 z-50 bg-neutral-950 flex flex-col justify-between p-4">
            <div className="flex items-center justify-between">
              <span className="text-xs font-bold text-red-500 uppercase tracking-wider">● В эфире</span>
              <button onClick={() => setIsBroadcasting(false)} className="w-8 h-8 rounded-full bg-neutral-800 text-white flex items-center justify-center">
                <X className="w-4 h-4" />
              </button>
            </div>
            <div className="flex-1 my-4 rounded-2xl bg-neutral-900 flex flex-col items-center justify-center text-center p-4">
              <img src={user.avatar} alt="Me" className="w-20 h-20 rounded-full border-4 border-pink-500" />
              <div className="mt-3 text-sm font-bold text-white">{user.name}</div>
              <p className="text-xs text-neutral-400 mt-1">Трансляция активна. Вас видят зрители!</p>
            </div>
            <button
              onClick={() => { setIsBroadcasting(false); showToast('Трансляция завершена'); }}
              className="w-full py-3 rounded-full bg-red-600 text-white text-xs font-bold uppercase tracking-wider active:scale-95"
            >
              Завершить эфир
            </button>
          </div>
        )}

        {/* Settings Modal */}
        {settingsOpen && (
          <div className="absolute inset-0 z-50 bg-black/80 flex items-end sm:items-center justify-center">
            <div className="w-full bg-neutral-900 border border-neutral-700 rounded-t-3xl p-4 space-y-3">
              <div className="flex items-center justify-between pb-2 border-b border-neutral-800">
                <span className="text-xs font-bold text-white">Настройки Loly Live</span>
                <button onClick={() => { setSettingsOpen(false); setWalletModal(null); }} className="text-neutral-400">
                  <X className="w-4 h-4" />
                </button>
              </div>

              <div className="p-3 rounded-xl bg-neutral-800 flex items-center justify-between">
                <div>
                  <div className="text-xs text-neutral-400">Баланс кошелька</div>
                  <div className="text-sm font-bold text-amber-300">💎 {user.diamonds} Алмазов</div>
                </div>
                <button
                  onClick={() => {
                    setUser(prev => ({ ...prev, diamonds: prev.diamonds + 100 }));
                    showToast('Пополнено на +100 💎');
                  }}
                  className="px-3 py-1.5 rounded-lg bg-amber-400 text-neutral-950 text-xs font-bold"
                >
                  +100 💎 (Тест)
                </button>
              </div>

              <div className="p-3 rounded-xl bg-neutral-800 flex items-center justify-between">
                <span className="text-xs text-neutral-300">Режим инкогнито</span>
                <input
                  type="checkbox"
                  checked={ghostMode}
                  onChange={(e) => setGhostMode(e.target.checked)}
                  className="accent-pink-500 w-4 h-4"
                />
              </div>

              <button
                onClick={() => { setSettingsOpen(false); showToast('Вы вышли из профиля'); }}
                className="w-full py-2.5 rounded-xl bg-red-600/20 text-red-400 text-xs font-bold"
              >
                Выйти из профиля
              </button>
            </div>
          </div>
        )}

      </div>
    </div>
  );
}