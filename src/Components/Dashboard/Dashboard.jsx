import React from 'react'
import style from './Dashboard.module.css'


export default function Dashboard() {
  return (
    <div className="space-y-4">
      <h1 className="text-3xl font-bold">Welcome back, John!</h1>
      <p className="text-gray-600 dark:text-gray-400">
        Here's what's happening with your courses today.
      </p>

      {/* هنا ممكن تضيف الكروت أو المحتوى اللي في الصورة اللي وريتها */}
      <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-4 gap-6 mt-6">
        <div className="bg-white dark:bg-blue-800 p-6 rounded-lg shadow">
          <h3 className="text-sm text-gray-500 dark:text-gray-400">Total Subjects</h3>
          <p className="text-2xl font-semibold mt-2">6</p>
          <p className="text-xs text-gray-400">Active this semester</p>
        </div>

        <div className="bg-white dark:bg-blue-800 p-6 rounded-lg shadow">
          <h3 className="text-sm text-gray-500 dark:text-gray-400">Lectures Attended</h3>
          <p className="text-2xl font-semibold mt-2">45</p>
          <p className="text-xs text-gray-400">89% attendance</p>
        </div>

        <div className="bg-white dark:bg-blue-800 p-6 rounded-lg shadow">
          <h3 className="text-sm text-gray-500 dark:text-gray-400">Classmates</h3>
          <p className="text-2xl font-semibold mt-2">234</p>
          <p className="text-xs text-gray-400">In your batch</p>
        </div>

        <div className="bg-white dark:bg-blue-800 p-6 rounded-lg shadow">
          <h3 className="text-sm text-gray-500 dark:text-gray-400">Avg Quiz Score</h3>
          <p className="text-2xl font-semibold mt-2">85%</p>
          <p className="text-xs text-gray-400">Keep it up!</p>
        </div>
      </div>
    </div>
  );
}
