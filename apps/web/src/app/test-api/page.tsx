'use client';

import { useState } from 'react';
import { apiClient } from '@/lib/api';

export default function TestApiPage() {
  const [result, setResult] = useState('');

  const testApi = async () => {
    try {
      const response = await apiClient.get('/health');
      setResult(JSON.stringify(response.data, null, 2));
    } catch (error) {
      setResult(`Error: ${error}`);
    }
  };

  return (
    <div className="p-8">
      <h1 className="text-2xl font-bold mb-4">Test API Connection</h1>
      <button 
        onClick={testApi}
        className="bg-blue-500 text-white px-4 py-2 rounded mb-4"
      >
        Test API
      </button>
      <pre className="bg-gray-100 p-4 rounded">
        {result}
      </pre>
    </div>
  );
}