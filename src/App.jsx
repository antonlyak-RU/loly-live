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

export default function App() {
  const [activeTab, setActiveTab] = useState('home');
  const [activeLiveStream, setActiveLiveStream] = useState(null);
  const [user, setUser] = useState({
    name: 'Лика Романова',
    handle: '@lolylive_star',
    id: 'loly_88921',
    diamonds: 650,
    beans: 1240,
    level: 19,
    followers: 8420,
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=400&auto=format&fit=crop&q=80',
    bio: 'Создаю контент с любовью 💫'
  });

  return (
    <div className="flex justify-center items-center h-screen bg-black font-sans text-slate-100">
      <div className="w-full h-full max-w-md bg-neutral-900 flex flex-col justify-between p-4">
        <div className="text-xl font-bold text-pink-400">Loly Live App Ready ✨</div>
        <div className="text-sm text-neutral-300">Добро пожаловать, {user.name}!</div>
      </div>
    </div>
  );
}
