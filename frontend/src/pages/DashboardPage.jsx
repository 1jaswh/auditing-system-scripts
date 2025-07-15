import React, { useEffect, useState } from 'react';
import axios from 'axios';

const DashboardPage = () => {
  const [logs, setLogs] = useState([]);

  useEffect(() => {
    const fetchLogs = async () => {
      const token = localStorage.getItem('token');
      const res = await axios.get('http://localhost:5000/api/logs', {
        headers: { Authorization: `Bearer ${token}` }
      });
      setLogs(res.data);
    };

    fetchLogs();
  }, []);

  return (
    <div className="p-4">
      <h1 className="text-3xl font-bold mb-4">Audit Logs</h1>
      <table className="table-auto w-full border">
        <thead>
          <tr className="bg-gray-200">
            <th className="px-4 py-2">User ID</th>
            <th className="px-4 py-2">Action</th>
            <th className="px-4 py-2">IP</th>
            <th className="px-4 py-2">Time</th>
          </tr>
        </thead>
        <tbody>
          {logs.map((log) => (
            <tr key={log.id}>
              <td className="border px-4 py-2">{log.userId}</td>
              <td className="border px-4 py-2">{log.action}</td>
              <td className="border px-4 py-2">{log.ip}</td>
              <td className="border px-4 py-2">{new Date(log.timestamp).toLocaleString()}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default DashboardPage;
