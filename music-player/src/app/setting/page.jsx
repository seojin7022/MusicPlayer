"use client"
import { useState } from 'react';
import { User, Music, Bell, Shield, HelpCircle } from 'lucide-react';

const SettingSection = ({ icon: Icon, title, children }) => (
  <div className="mb-6">
    <div className="flex items-center mb-2">
      <Icon className="mr-2 text-gray-700" size={20} />
      <h2 className="text-lg font-semibold text-gray-900">{title}</h2>
    </div>
    {children}
  </div>
)

export default function Settings() {
  const [audioQuality, setAudioQuality] = useState('high')
  const [notifications, setNotifications] = useState(true)

  return (
    <div className="p-4 text-gray-900">
      <h1 className="text-2xl font-bold mb-6">Settings</h1>
      
      <SettingSection icon={User} title="Account">
        <button className="bg-blue-500 text-white px-4 py-2 rounded">Manage Account</button>
      </SettingSection>

      <SettingSection icon={Music} title="Audio">
        <div>
          <label className="block mb-2">Audio Quality:</label>
          <select 
            value={audioQuality} 
            onChange={(e) => setAudioQuality(e.target.value)}
            className="w-full p-2 border rounded text-gray-900"
          >
            <option value="low">Low (64 kbps)</option>
            <option value="medium">Medium (128 kbps)</option>
            <option value="high">High (256 kbps)</option>
            <option value="very-high">Very High (320 kbps)</option>
          </select>
        </div>
      </SettingSection>

      <SettingSection icon={Bell} title="Notifications">
        <div className="flex items-center">
          <input 
            type="checkbox" 
            checked={notifications} 
            onChange={() => setNotifications(!notifications)}
            className="mr-2"
          />
          <label>Enable push notifications</label>
        </div>
      </SettingSection>

      <SettingSection icon={Shield} title="Privacy">
        <button className="bg-gray-200 text-gray-900 px-4 py-2 rounded">Privacy Settings</button>
      </SettingSection>

      <SettingSection icon={HelpCircle} title="Help & Support">
        <button className="bg-gray-200 text-gray-900 px-4 py-2 rounded">Contact Support</button>
      </SettingSection>
    </div>
  )
}