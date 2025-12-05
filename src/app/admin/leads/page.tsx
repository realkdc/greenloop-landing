'use client';

import { useState, useEffect } from 'react';
import { RefreshCw, Mail, Clock, User, Trash2 } from 'lucide-react';

interface Lead {
  id: string;
  name: string;
  email: string;
  timestamp: string;
  source: string;
  status: string;
}

export default function LeadsAdmin() {
  const [leads, setLeads] = useState<Lead[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  const fetchLeads = async () => {
    setLoading(true);
    setError('');
    try {
      const response = await fetch('/api/admin/leads');
      const data = await response.json();
      if (response.ok) {
        setLeads(data.leads || []);
      } else {
        setError(data.error || 'Failed to load leads');
      }
    } catch (err) {
      setError('Failed to connect to server');
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchLeads();
  }, []);

  const formatDate = (timestamp: string) => {
    return new Date(timestamp).toLocaleString();
  };

  return (
    <div className="min-h-screen bg-slate-50 p-4 md:p-8">
      <div className="max-w-6xl mx-auto">
        <div className="flex items-center justify-between mb-8">
          <div>
            <h1 className="text-3xl font-bold text-slate-900">Leads Dashboard</h1>
            <p className="text-slate-600 mt-1">{leads.length} total leads captured</p>
          </div>
          <button
            onClick={fetchLeads}
            disabled={loading}
            className="flex items-center gap-2 px-4 py-2 bg-emerald-600 text-white rounded-lg hover:bg-emerald-700 transition-colors disabled:opacity-50"
          >
            <RefreshCw className={`h-4 w-4 ${loading ? 'animate-spin' : ''}`} />
            Refresh
          </button>
        </div>

        {error && (
          <div className="mb-6 p-4 bg-red-50 border border-red-200 rounded-lg text-red-700">
            {error}
          </div>
        )}

        {loading && leads.length === 0 ? (
          <div className="text-center py-12">
            <RefreshCw className="h-8 w-8 animate-spin text-emerald-600 mx-auto mb-4" />
            <p className="text-slate-600">Loading leads...</p>
          </div>
        ) : leads.length === 0 ? (
          <div className="text-center py-12 bg-white rounded-xl border border-slate-200">
            <Mail className="h-12 w-12 text-slate-300 mx-auto mb-4" />
            <h3 className="text-xl font-semibold text-slate-700 mb-2">No leads yet</h3>
            <p className="text-slate-500">Leads will appear here when someone submits the form.</p>
          </div>
        ) : (
          <div className="bg-white rounded-xl border border-slate-200 overflow-hidden shadow-sm">
            <div className="overflow-x-auto">
              <table className="w-full">
                <thead>
                  <tr className="bg-slate-50 border-b border-slate-200">
                    <th className="text-left px-6 py-4 text-sm font-semibold text-slate-700">Name</th>
                    <th className="text-left px-6 py-4 text-sm font-semibold text-slate-700">Email</th>
                    <th className="text-left px-6 py-4 text-sm font-semibold text-slate-700">Submitted</th>
                    <th className="text-left px-6 py-4 text-sm font-semibold text-slate-700">Status</th>
                    <th className="text-left px-6 py-4 text-sm font-semibold text-slate-700">Actions</th>
                  </tr>
                </thead>
                <tbody>
                  {leads.map((lead, index) => (
                    <tr key={lead.id} className={index % 2 === 0 ? 'bg-white' : 'bg-slate-50/50'}>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-3">
                          <div className="h-10 w-10 rounded-full bg-emerald-100 flex items-center justify-center">
                            <User className="h-5 w-5 text-emerald-600" />
                          </div>
                          <span className="font-medium text-slate-900">{lead.name}</span>
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <a 
                          href={`mailto:${lead.email}`}
                          className="text-emerald-600 hover:text-emerald-700 hover:underline"
                        >
                          {lead.email}
                        </a>
                      </td>
                      <td className="px-6 py-4">
                        <div className="flex items-center gap-2 text-slate-600 text-sm">
                          <Clock className="h-4 w-4" />
                          {formatDate(lead.timestamp)}
                        </div>
                      </td>
                      <td className="px-6 py-4">
                        <span className={`inline-flex px-3 py-1 rounded-full text-xs font-medium ${
                          lead.status === 'new' 
                            ? 'bg-emerald-100 text-emerald-700' 
                            : 'bg-slate-100 text-slate-700'
                        }`}>
                          {lead.status || 'new'}
                        </span>
                      </td>
                      <td className="px-6 py-4">
                        <a
                          href={`mailto:${lead.email}?subject=Your GreenLoop Agreement&body=Hi ${lead.name},%0D%0A%0D%0AThanks for your interest in GreenLoop!%0D%0A%0D%0A`}
                          className="inline-flex items-center gap-2 px-3 py-2 bg-emerald-600 text-white text-sm rounded-lg hover:bg-emerald-700 transition-colors"
                        >
                          <Mail className="h-4 w-4" />
                          Send Email
                        </a>
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        )}

        <div className="mt-8 p-4 bg-slate-100 rounded-lg text-sm text-slate-600">
          <p><strong>Tip:</strong> Click "Send Email" to open your email client with a pre-filled message to the lead.</p>
        </div>
      </div>
    </div>
  );
}

