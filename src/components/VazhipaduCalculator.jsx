import React, { useState } from 'react';
import { VAZHIPADU_DATA } from '../data/templeData';

export default function VazhipaduCalculator() {
  const [selectedItems, setSelectedItems] = useState({});
  const [devoteeName, setDevoteeName] = useState('');
  const [star, setStar] = useState('അശ്വതി (Aswathi)');
  const [date, setDate] = useState('');

  const stars = [
    'അശ്വതി (Aswathi)', 'ഭരണി (Bharani)', 'കാർത്തിക (Karthika)', 'രോഹിണി (Rohini)',
    'മകയിരം (Makayiram)', 'തിരുവാതിര (Thiruvathira)', 'പുണർതം (Punarpoosam)', 'പൂയം (Pooyam)',
    'ആയില്യം (Ayilyam)', 'മകം (Makam)', 'പൂരം (Pooram)', 'ഉത്രം (Uthram)',
    'അത്തം (Atham)', 'ചിത്തിര (Chithira)', 'ചോതി (Chothi)', 'വിശാഖം (Visakham)',
    'അനിഴം (Anizham)', 'തൃക്കേട്ട (Thrikketta)', 'മൂലം (Moolam)', 'പൂരാടം (Pooradam)',
    'ഉത്രാടം (Uthradam)', 'തിരുവോണം (Thiruvonam)', 'അവിട്ടം (Avittam)', 'ചതയം (Chathayam)',
    'പൂരുരുട്ടാതി (Pooruruttathi)', 'ഉത്രട്ടാതി (Uthrattathi)', 'രേവതി (Revathi)'
  ];

  const popularOfferings = [
    { name: 'അഷ്ടദ്രവ്യ മഹാഗണപതിഹോമം', category: 'ഹോമം' },
    { name: 'പഞ്ചാമൃത അഭിഷേകം', category: 'അഭിഷേകം' },
    { name: 'പുഷ്പാഞ്ജലി', category: 'അർച്ചന' },
    { name: 'പാൽപായസം', category: 'നിവേദ്യം' },
    { name: 'നൂറും പാലും (സർപ്പപൂജ)', category: 'സർപ്പപൂജ' },
    { name: 'ഷഷ്ഠി നേർച്ച', category: 'വ്രതം' },
    { name: 'ശക്തിവേൽ ശരവണപൂജ', category: 'വിശേഷാൽ' },
    { name: 'തുലാഭാരം', category: 'നേർച്ച' },
  ];

  const toggleOffering = (name) => {
    setSelectedItems(prev => {
      const copy = { ...prev };
      if (copy[name]) delete copy[name];
      else copy[name] = 1;
      return copy;
    });
  };

  const selectedList = Object.keys(selectedItems);

  const generateWhatsAppInquiry = () => {
    if (selectedList.length === 0) return '#';
    const text = encodeURIComponent(
      `നമസ്കാരം, കണ്ണങ്കോട് ക്ഷേത്രത്തിൽ വഴിപാട് വിവരങ്ങൾ അറിയുവാൻ ആഗ്രഹിക്കുന്നു:\n` +
      `പേര്: ${devoteeName || 'ഭക്തൻ'}\n` +
      `നക്ഷത്രം: ${star}\n` +
      `തീയതി: ${date || 'ഉടൻ'}\n` +
      `വഴിപാടുകൾ:\n` +
      selectedList.map((item, i) => `${i + 1}. ${item}`).join('\n')
    );
    return `https://wa.me/919567691538?text=${text}`;
  };

  return (
    <div className="vazhipadu-planner-card p-4 p-md-5 rounded-4 shadow-lg my-5 bg-white border" style={{ borderColor: 'var(--border-gold)' }}>
      <div className="text-center mb-4">
        <span className="section-label">Interactive Offering Planner</span>
        <h3 className="section-title" style={{ fontFamily: 'var(--font-heading)', fontSize: '1.9rem' }}>
          വഴിപാട് തിരഞ്ഞെടുപ്പും അന്വേഷണവും
        </h3>
        <p className="section-subtitle">
          നിങ്ങളുടെ പേരും നക്ഷത്രവും നൽകി ആവശ്യമായ വഴിപാടുകൾ തിരഞ്ഞെടുത്ത് ഒറ്റ ക്ലിക്കിൽ ക്ഷേത്രത്തിലേക്ക് സന്ദേശം അയക്കാം
        </p>
      </div>

      <div className="row g-4 mb-4">
        <div className="col-md-4">
          <label className="form-label fw-bold" style={{ fontFamily: 'var(--font-malayalam)', color: 'var(--dark-brown)' }}>ഭക്തന്റെ പേര് (Devotee Name)</label>
          <input
            type="text"
            className="form-control rounded-pill px-3 py-2"
            placeholder="പേര് നൽകുക..."
            value={devoteeName}
            onChange={(e) => setDevoteeName(e.target.value)}
          />
        </div>
        <div className="col-md-4">
          <label className="form-label fw-bold" style={{ fontFamily: 'var(--font-malayalam)', color: 'var(--dark-brown)' }}>ജന്മ നക്ഷത്രം (Birth Star)</label>
          <select
            className="form-select rounded-pill px-3 py-2"
            value={star}
            onChange={(e) => setStar(e.target.value)}
          >
            {stars.map((s, i) => (
              <option key={i} value={s}>{s}</option>
            ))}
          </select>
        </div>
        <div className="col-md-4">
          <label className="form-label fw-bold" style={{ fontFamily: 'var(--font-malayalam)', color: 'var(--dark-brown)' }}>പൂജ തീയതി (Preferred Date)</label>
          <input
            type="date"
            className="form-control rounded-pill px-3 py-2"
            value={date}
            onChange={(e) => setDate(e.target.value)}
          />
        </div>
      </div>

      {/* Quick Select Offerings */}
      <div className="mb-4">
        <h6 className="fw-bold mb-3" style={{ fontFamily: 'var(--font-heading)', color: 'var(--saffron)' }}>
          <i className="fas fa-hand-holding-heart me-2"></i>പ്രധാന വഴിപാടുകൾ തിരഞ്ഞെടുക്കുക (Click to select):
        </h6>
        <div className="d-flex flex-wrap gap-2">
          {popularOfferings.map((po, idx) => {
            const isSelected = !!selectedItems[po.name];
            return (
              <button
                key={idx}
                type="button"
                onClick={() => toggleOffering(po.name)}
                className={`btn btn-sm rounded-pill px-3 py-2 offering-chip ${isSelected ? 'selected' : ''}`}
              >
                {isSelected ? '✓ ' : '+ '}{po.name}
              </button>
            );
          })}
        </div>
      </div>

      {/* Selected Summary Card */}
      {selectedList.length > 0 && (
        <div className="p-3 rounded-4 mb-4" style={{ background: 'var(--cream-dark)', border: '1px solid var(--border-gold)' }}>
          <div className="d-flex justify-content-between align-items-center flex-wrap gap-2">
            <div>
              <strong style={{ fontFamily: 'var(--font-malayalam)' }}>തിരഞ്ഞെടുത്ത വഴിപാടുകൾ ({selectedList.length}):</strong>
              <div className="small text-muted mt-1">{selectedList.join(', ')}</div>
            </div>
            <a
              href={generateWhatsAppInquiry()}
              target="_blank"
              rel="noopener noreferrer"
              className="btn btn-success rounded-pill px-4 py-2 fw-bold"
            >
              <i className="fab fa-whatsapp me-2"></i>വാട്ട്‌സ്ആപ്പിൽ അന്വേഷിക്കുക
            </a>
          </div>
        </div>
      )}
    </div>
  );
}

