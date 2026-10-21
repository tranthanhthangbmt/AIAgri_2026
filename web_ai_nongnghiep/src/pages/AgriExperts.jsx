import React, { useState } from 'react';
import {
  Brain,
  Cpu,
  Layers,
  ShieldCheck,
  AlertTriangle,
  Copy,
  Check,
  ExternalLink,
  BookOpen,
  Database,
  Droplets,
  FlaskConical,
  Coffee,
  Bug,
  Sprout,
  Thermometer,
  Sparkles,
  Lock,
  ArrowRight,
  Info,
  CheckCircle2,
  ChevronRight
} from 'lucide-react';
import {
  overviewData,
  methodologyData,
  expertSystemsList
} from '../data/expertSystemsData';

const AgriExperts = () => {
  const [selectedExpertId, setSelectedExpertId] = useState('coffee-dss');
  const [activeSubTab, setActiveSubTab] = useState('instruction');
  const [copiedId, setCopiedId] = useState(null);
  const [toastMessage, setToastMessage] = useState('');

  const currentExpert = expertSystemsList.find((e) => e.id === selectedExpertId) || expertSystemsList[0];

  const handleCopyPrompt = (text, name) => {
    navigator.clipboard.writeText(text);
    setCopiedId(currentExpert.id);
    setToastMessage(`Đã sao chép System Instruction của "${name}"!`);
    setTimeout(() => {
      setCopiedId(null);
      setToastMessage('');
    }, 3000);
  };

  const getExpertIcon = (id, size = 22) => {
    switch (id) {
      case 'coffee-dss':
        return <Coffee size={size} />;
      case 'pepper-dss':
        return <Bug size={size} />;
      case 'durian-dss':
        return <Sprout size={size} />;
      case 'soil-dss':
        return <Layers size={size} />;
      case 'robusta-dss':
        return <FlaskConical size={size} />;
      default:
        return <Sparkles size={size} />;
    }
  };

  return (
    <div className="agri-experts-page">
      {/* Toast Alert */}
      {toastMessage && (
        <div className="custom-toast">
          <Check size={18} />
          <span>{toastMessage}</span>
        </div>
      )}

      {/* Hero Section */}
      <section className="expert-hero-section">
        <div className="container">
          <div className="hero-badge">
            <Sparkles size={16} />
            <span>Antigravity Multi-Agent Architecture • Google NotebookLM RAG</span>
          </div>
          <h1 className="expert-hero-title">
            Hệ Chuyên Gia Hỗ Trợ Quyết Định (Agri-DSS)
          </h1>
          <p className="expert-hero-subtitle">
            Chuyển dịch đột phá từ thị giác máy tính đơn thuần sang Tổ hợp Đa đại lý thông minh,
            giải quyết các bài toán sinh lý thực vật, dịch hại và chuỗi giá trị đặc thù vùng Tây Nguyên.
          </p>

          <div className="hero-quick-stats">
            <div className="stat-card">
              <span className="stat-num">5</span>
              <span className="stat-label">Hệ DSS Chuyên Sâu</span>
            </div>
            <div className="stat-card">
              <span className="stat-num">04</span>
              <span className="stat-label">Luật Vận Hành Bất Biến</span>
            </div>
            <div className="stat-card">
              <span className="stat-num">5 Bước</span>
              <span className="stat-label">Quy Trình Cửa Sắt</span>
            </div>
            <div className="stat-card">
              <span className="stat-num">100%</span>
              <span className="stat-label">Chống Ảo Giác (Anti-Hallucination)</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Container */}
      <div className="container expert-main-content">
        
        {/* Phân khu 1: Bối cảnh & Cây tư duy (Tree of Thought) */}
        <section className="glass-panel expert-section">
          <div className="section-header">
            <div className="section-icon-badge">
              <Brain size={24} />
            </div>
            <div>
              <h2 className="section-title">1. Bối Cảnh Nông Nghiệp & Cây Tư Duy (Tree of Thought)</h2>
              <p className="section-desc">
                Phân tích sâu các thách thức tự nhiên tại các tỉnh Đắk Lắk, Gia Lai, Lâm Đồng để dẫn xuất ra 5 đề tài khoa học cốt lõi.
              </p>
            </div>
          </div>

          {/* 5 Thách thức thực địa */}
          <div className="challenges-grid">
            {overviewData.regionContext.challenges.map((c, idx) => (
              <div key={idx} className="challenge-item">
                <div className="challenge-tag">Thách thức #{idx + 1}</div>
                <h4 className="challenge-title">{c.title}</h4>
                <p className="challenge-desc">{c.desc}</p>
              </div>
            ))}
          </div>

          {/* Cây tư duy Tree of Thought */}
          <div className="tot-box">
            <h3 className="tot-header">
              <Layers size={20} />
              <span>Sơ Đồ Dẫn Xuất Cây Tư Duy (Tree of Thought)</span>
            </h3>
            <div className="tot-branches">
              {overviewData.treeOfThought.map((tot, idx) => (
                <div key={idx} className="tot-card">
                  <div className="tot-branch-title">{tot.branch}</div>
                  <div className="tot-line">
                    <strong>Vấn đề cốt lõi:</strong> {tot.problem}
                  </div>
                  <div className="tot-line">
                    <strong>Hướng giải quyết RAG:</strong> {tot.solution}
                  </div>
                  <div className="tot-derivations">
                    {tot.derivations.map((d, dIdx) => (
                      <span key={dIdx} className="derivation-chip">
                        🎯 {d}
                      </span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Bảng so sánh AI thông thường vs Hệ chuyên gia DSS */}
          <div className="comparison-wrapper">
            <h3 className="comparison-title">
              <ShieldCheck size={20} />
              <span>So Sánh AI Đàm Thoại Thông Thường vs Hệ Chuyên Gia DSS</span>
            </h3>
            <div className="table-responsive">
              <table className="comparison-table">
                <thead>
                  <tr>
                    <th>Tiêu chí đánh giá</th>
                    <th>Mô hình AI đàm thoại thông thường</th>
                    <th>Hệ chuyên gia DSS (Antigravity Architecture)</th>
                  </tr>
                </thead>
                <tbody>
                  {overviewData.comparisonTable.map((row, idx) => (
                    <tr key={idx}>
                      <td className="criteria-col">
                        <strong>{row.criteria}</strong>
                      </td>
                      <td className="regular-ai-col">❌ {row.regularAi}</td>
                      <td className="expert-dss-col">✅ {row.expertDss}</td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>
          </div>
        </section>

        {/* Phân khu 2: Phương pháp luận & Kết nối NotebookLM */}
        <section className="glass-panel expert-section">
          <div className="section-header">
            <div className="section-icon-badge">
              <Cpu size={24} />
            </div>
            <div>
              <h2 className="section-title">2. Phương Pháp Luận Đa Đại Lý & Kết Nối Google NotebookLM</h2>
              <p className="section-desc">
                Cơ chế phân tách vai trò Sub-Agents, 4 luật vận hành nghiêm ngặt và cách xây dựng kho tri thức không ảo giác.
              </p>
            </div>
          </div>

          {/* 4 Luật vận hành bất biến */}
          <div className="principles-grid">
            {methodologyData.fourPrinciples.map((p, idx) => (
              <div key={idx} className="principle-card">
                <div className="principle-number">{p.number}</div>
                <h4 className="principle-name">{p.name}</h4>
                <p className="principle-desc">{p.desc}</p>
              </div>
            ))}
          </div>

          {/* Sơ đồ kết nối Google NotebookLM */}
          <div className="notebooklm-guide-box">
            <div className="nlm-header">
              <div className="nlm-title-group">
                <Database size={22} color="var(--primary-light)" />
                <h3>Quy Trình Tích Hợp Google NotebookLM Làm Cơ Sở Tri Thức (Grounding Data)</h3>
              </div>
              <a
                href="https://notebooklm.google.com"
                target="_blank"
                rel="noreferrer"
                className="nlm-external-btn"
              >
                <span>Mở Google NotebookLM</span>
                <ExternalLink size={16} />
              </a>
            </div>
            <p className="nlm-concept">{methodologyData.notebookLmWorkflow.concept}</p>

            <div className="nlm-steps-grid">
              {methodologyData.notebookLmWorkflow.steps.map((s) => (
                <div key={s.step} className="nlm-step-item">
                  <div className="step-badge">Bước {s.step}</div>
                  <h4 className="step-title">{s.title}</h4>
                  <p className="step-desc">{s.desc}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        {/* Phân khu 3: Khám phá chi tiết 5 Hệ Chuyên gia Nông Nghiệp */}
        <section className="glass-panel expert-section" id="expert-tabs-section">
          <div className="section-header">
            <div className="section-icon-badge">
              <Sparkles size={24} />
            </div>
            <div>
              <h2 className="section-title">3. Khám Phá Chi Tiết 5 Hệ Chuyên Gia Nông Nghiệp (Gem Instructions)</h2>
              <p className="section-desc">
                Chọn một hệ chuyên gia bên dưới để tra cứu chi tiết Cơ sở dữ liệu khoa học, Quy trình 5 bước, Bảng Red Team và Toàn văn System Instruction.
              </p>
            </div>
          </div>

          {/* Bộ 5 Thẻ chọn chuyên gia (Crop Tabs) */}
          <div className="expert-tabs-nav">
            {expertSystemsList.map((expert) => {
              const isSelected = expert.id === selectedExpertId;
              return (
                <button
                  key={expert.id}
                  className={`expert-tab-btn ${isSelected ? 'active' : ''}`}
                  onClick={() => setSelectedExpertId(expert.id)}
                >
                  <div className="expert-tab-icon" style={{ color: expert.badgeColor }}>
                    {getExpertIcon(expert.id, 24)}
                  </div>
                  <div className="expert-tab-text">
                    <span className="expert-tab-name">{expert.name}</span>
                    <span className="expert-tab-level">{expert.level}</span>
                  </div>
                  {isSelected && <div className="active-glow-indicator" />}
                </button>
              );
            })}
          </div>

          {/* Vùng Chi tiết của Chuyên gia đang chọn */}
          <div className="expert-detail-container">
            {/* Header Thẻ Chuyên Gia */}
            <div className="expert-profile-banner" style={{ borderLeft: `6px solid ${currentExpert.badgeColor}` }}>
              <div className="profile-title-block">
                <div className="badge-row">
                  <span className="crop-pill" style={{ backgroundColor: `${currentExpert.badgeColor}20`, color: currentExpert.badgeColor }}>
                    {currentExpert.category}
                  </span>
                  <span className="level-pill">{currentExpert.level}</span>
                </div>
                <h3 className="profile-name">{currentExpert.name}</h3>
                <p className="profile-tagline">{currentExpert.tagline}</p>
              </div>

              <div className="profile-meta-grid">
                <div className="meta-cell">
                  <span className="meta-label">Danh tính cốt lõi:</span>
                  <span className="meta-val">{currentExpert.identity}</span>
                </div>
                <div className="meta-cell">
                  <span className="meta-label">Đối tượng phục vụ:</span>
                  <span className="meta-val">{currentExpert.target}</span>
                </div>
                <div className="meta-cell">
                  <span className="meta-label">Tôn chỉ hành động:</span>
                  <span className="meta-val highlight-motto">"{currentExpert.motto}"</span>
                </div>
              </div>
            </div>

            {/* Sub Tabs điều hướng nội dung */}
            <div className="sub-tabs-bar">
              <button
                className={`sub-tab-btn ${activeSubTab === 'instruction' ? 'active' : ''}`}
                onClick={() => setActiveSubTab('instruction')}
              >
                <Copy size={16} />
                <span>Toàn Văn System Instruction</span>
              </button>
              <button
                className={`sub-tab-btn ${activeSubTab === 'knowledge' ? 'active' : ''}`}
                onClick={() => setActiveSubTab('knowledge')}
              >
                <BookOpen size={16} />
                <span>Cơ Sở Dữ Liệu Khoa Học (NotebookLM)</span>
              </button>
              <button
                className={`sub-tab-btn ${activeSubTab === 'subagents' ? 'active' : ''}`}
                onClick={() => setActiveSubTab('subagents')}
              >
                <Cpu size={16} />
                <span>Đội Ngũ Sub-Agents</span>
              </button>
              <button
                className={`sub-tab-btn ${activeSubTab === 'protocol' ? 'active' : ''}`}
                onClick={() => setActiveSubTab('protocol')}
              >
                <Layers size={16} />
                <span>Quy Trình 5 Cửa Sắt</span>
              </button>
              <button
                className={`sub-tab-btn ${activeSubTab === 'redteam' ? 'active' : ''}`}
                onClick={() => setActiveSubTab('redteam')}
              >
                <AlertTriangle size={16} />
                <span>Phòng Thí Nghiệm Rủi Ro</span>
              </button>
              <button
                className={`sub-tab-btn ${activeSubTab === 'sample' ? 'active' : ''}`}
                onClick={() => setActiveSubTab('sample')}
              >
                <CheckCircle2 size={16} />
                <span>Kịch Bản Mẫu Thực Địa</span>
              </button>
            </div>

            {/* Tab 1: Toàn văn Gem System Instruction */}
            {activeSubTab === 'instruction' && (
              <div className="sub-content-panel">
                <div className="panel-top-actions">
                  <div className="actions-left">
                    <h4>Mã Nguồn Gem System Instruction</h4>
                    <span className="instruction-hint">Dán prompt này vào ô System Instructions của Gemini Gem hoặc Google NotebookLM</span>
                  </div>
                  <div className="actions-right">
                    <button
                      className="copy-prompt-btn"
                      onClick={() => handleCopyPrompt(currentExpert.fullInstructionMarkdown, currentExpert.name)}
                    >
                      {copiedId === currentExpert.id ? <Check size={18} /> : <Copy size={18} />}
                      <span>{copiedId === currentExpert.id ? 'Đã Sao Chép!' : 'Sao Chép System Instruction'}</span>
                    </button>
                  </div>
                </div>

                <div className="code-viewer-container">
                  <pre className="code-block">
                    <code>{currentExpert.fullInstructionMarkdown}</code>
                  </pre>
                </div>
              </div>
            )}

            {/* Tab 2: Cơ sở dữ liệu khoa học */}
            {activeSubTab === 'knowledge' && (
              <div className="sub-content-panel">
                <div className="panel-title-with-desc">
                  <h4>Danh Mục Sách & Giáo Trình Khoa Học Cần Nạp Cho Chuyên Gia</h4>
                  <p>
                    Đây là các tài liệu "chân lý nền tảng" (Ground Truth) bắt buộc phải tải lên mục Sources trong Google NotebookLM
                    để AI trích dẫn chuẩn xác, loại trừ hoàn toàn rủi ro bịa đặt thông tin.
                  </p>
                </div>

                <div className="knowledge-cards-list">
                  {currentExpert.knowledgeBase.map((kb, idx) => (
                    <div key={idx} className="kb-card">
                      <div className="kb-badge">Nguồn tài liệu #{idx + 1}</div>
                      <h5 className="kb-title">
                        <BookOpen size={18} />
                        <span>{kb.name}</span>
                      </h5>
                      <div className="kb-publisher">
                        <strong>Cơ quan ban hành / Tác giả:</strong> {kb.publisher}
                      </div>
                      <div className="kb-focus">
                        <strong>Nội dung trọng tâm nạp vào AI:</strong> {kb.focus}
                      </div>
                    </div>
                  ))}
                </div>

                <div className="kb-tip-box">
                  <Info size={20} color="var(--primary-color)" />
                  <div>
                    <strong>Mẹo thiết lập NotebookLM:</strong> Sau khi nạp các file PDF trên vào NotebookLM,
                    hãy tạo các ghi chú (Notes) tổng hợp bảng hoạt chất hoặc ngưỡng pH/Brix để làm chỉ mục tìm kiếm nhanh cho Sub-Agents.
                  </div>
                </div>
              </div>
            )}

            {/* Tab 3: Đội ngũ Sub-Agents */}
            {activeSubTab === 'subagents' && (
              <div className="sub-content-panel">
                <div className="panel-title-with-desc">
                  <h4>Cơ Cấu Tổ Hợp Sub-Agents Chuyên Trách ({currentExpert.level})</h4>
                  <p>
                    Thay vì một mô hình AI đơn lẻ trả lời chung chung, hệ thống phân định thành các chuyên gia cấp dưới chuyên sâu
                    dưới quyền điều phối của Meta-Agent Orchestrator.
                  </p>
                </div>

                <div className="subagents-grid">
                  {currentExpert.subAgents.map((agent, idx) => (
                    <div key={idx} className="subagent-card">
                      <div className="agent-badge">Sub-Agent #{idx + 1}</div>
                      <h5 className="agent-name">{agent.name}</h5>
                      <div className="agent-role">
                        <strong>Vai trò chuyên môn:</strong> {agent.role}
                      </div>
                      <p className="agent-desc">{agent.description}</p>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tab 4: Quy trình 5 Cửa Sắt */}
            {activeSubTab === 'protocol' && (
              <div className="sub-content-panel">
                <div className="panel-title-with-desc">
                  <h4>Quy Trình "5 Cửa Sắt" (Strict 5-Step Protocol) & Chốt Chặn Khóa Trạng Thái</h4>
                  <p>
                    Hệ thống vận hành theo nguyên tắc đơn nhiệm (Atomic Execution). Kỹ sư phải bấm duyệt ("Đồng ý", "Tiếp tục")
                    để mở từng chốt chặn, ngăn chặn mọi sai lầm bộc phát.
                  </p>
                </div>

                <div className="protocol-timeline">
                  {currentExpert.protocolSteps.map((step, idx) => (
                    <div key={idx} className="timeline-item">
                      <div className="timeline-marker">
                        <span>{step.step}</span>
                      </div>
                      <div className="timeline-body">
                        <div className="step-header-row">
                          <h5 className="step-title">{step.title}</h5>
                          <span className="step-badge-tag">Bước {step.step}/5</span>
                        </div>
                        <div className="step-objective">
                          <strong>Mục tiêu:</strong> {step.objective}
                        </div>
                        <div className="step-actions">
                          <strong>Hành động chi tiết:</strong> {step.actions}
                        </div>
                        <div className="step-checkpoint">
                          <Lock size={15} />
                          <span>{step.checkpoint}</span>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {/* Tab 5: Phòng thí nghiệm rủi ro Red Team */}
            {activeSubTab === 'redteam' && (
              <div className="sub-content-panel">
                <div className="panel-title-with-desc">
                  <h4>Phòng Thí Nghiệm Rủi Ro (Agri-Lab Red Team Stress Test)</h4>
                  <p>
                    Hệ thống giả lập trước các sai lầm kinh điển của nhà nông hoặc diễn biến thời tiết cực đoan
                    để đưa ra phương án chữa cháy và phòng vệ chủ động.
                  </p>
                </div>

                <div className="table-responsive">
                  <table className="redteam-table">
                    <thead>
                      <tr>
                        <th style={{ width: '30%' }}>Tình huống rủi ro / Sai lầm</th>
                        <th style={{ width: '35%' }}>Hậu quả sinh lý cây trồng</th>
                        <th style={{ width: '35%' }}>Phương án chữa cháy của Chuyên gia</th>
                      </tr>
                    </thead>
                    <tbody>
                      {currentExpert.redTeamTable.map((row, idx) => (
                        <tr key={idx}>
                          <td className="risk-col">
                            <AlertTriangle size={16} color="#DC2626" />
                            <span>{row.risk}</span>
                          </td>
                          <td className="impact-col">{row.impact}</td>
                          <td className="solution-col">
                            <strong>{row.solution}</strong>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            )}

            {/* Tab 6: Kịch bản mẫu thực địa */}
            {activeSubTab === 'sample' && (
              <div className="sub-content-panel">
                <div className="panel-title-with-desc">
                  <h4>Mô Phỏng Kịch Bản Hội Thoại Thực Tế</h4>
                  <p>
                    Minh họa phản ứng của Hệ chuyên gia khi tiếp nhận câu hỏi thực tế của nhà nông: Hệ thống kiên quyết từ chối kê đơn vội vã,
                    tuân thủ Bước 1 để khám nghiệm hiện trạng vườn.
                  </p>
                </div>

                <div className="chat-simulation-box">
                  <div className="chat-bubble user-bubble">
                    <div className="chat-sender">👨‍🌾 Kỹ sư / Chủ vườn hỏi:</div>
                    <div className="chat-text">"{currentExpert.sampleScenario.userInput}"</div>
                  </div>

                  <div className="chat-arrow-divider">
                    <ArrowRight size={20} />
                    <span>Phản hồi đơn nhiệm có Chốt chặn của Chuyên gia</span>
                  </div>

                  <div className="chat-bubble expert-bubble">
                    <div className="chat-sender">🤖 {currentExpert.name} ({currentExpert.level}):</div>
                    <pre className="chat-response-text">{currentExpert.sampleScenario.expertResponse}</pre>
                  </div>
                </div>
              </div>
            )}

          </div>
        </section>

      </div>
    </div>
  );
};

export default AgriExperts;
