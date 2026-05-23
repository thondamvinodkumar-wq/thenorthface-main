import { useState, useEffect } from 'react';

const FeedbackForm = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [satisfactionScore, setSatisfactionScore] = useState(null);
  const [visitPurpose, setVisitPurpose] = useState('');
  const [completedPurpose, setCompletedPurpose] = useState('');
  const [feedback, setFeedback] = useState('');
  const [isLoyaltyMember, setIsLoyaltyMember] = useState('');
  const [isMounted, setIsMounted] = useState(false);

  useEffect(() => {
    // Defer setting mounted to the next animation frame to avoid synchronous state update warnings
    const rafId = requestAnimationFrame(() => setIsMounted(true));
    return () => cancelAnimationFrame(rafId);
  }, []);

  const toggleForm = () => setIsOpen(!isOpen);

  useEffect(() => {
    if (!isMounted || !isOpen) return;

    const handleClickOutside = (e) => {
      const form = document.querySelector('.feedbackForm');
      const btn = document.querySelector('.feedbackButton');

      if (form && !form.contains(e.target) &&
          btn && !btn.contains(e.target)) {
        setIsOpen(false);
      }
    };

    document.addEventListener('mousedown', handleClickOutside);
    return () => document.removeEventListener('mousedown', handleClickOutside);
  }, [isOpen, isMounted]);

  const handleSubmit = (e) => {
    e.preventDefault();
    
    const payload = {
      satisfactionScore,
      visitPurpose,
      completedPurpose,
      feedback,
      isLoyaltyMember
    };

    console.log('Feedback submitted', payload);

    // Reset form
    setSatisfactionScore(null);
    setVisitPurpose('');
    setCompletedPurpose('');
    setFeedback('');
    setIsLoyaltyMember('');
    setIsOpen(false);
  };

  const styles = {
    feedbackButton: {
      position: 'fixed',
      right: '-40px',
      top: '50%',
      transform: 'translateY(-50%) rotate(-90deg)',
      background: '#000',
      color: '#fff',
      border: 'none',
      padding: '10px 24px 14px',
      borderRadius: '2px',
      fontWeight: 600,
      cursor: 'pointer',
      zIndex: 1000,
      fontSize: '14px',
      boxShadow: '0 4px 20px rgba(0,0,0,0.3)'
    },

    overlay: {
      position: 'fixed',
      top: 0,
      left: 0,
      width: '100vw',
      height: '100vh',
      background: 'rgba(0,0,0,0.65)',
      zIndex: 9999,
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      padding: '20px'
    },

    feedbackForm: {
      background: '#fff',
      width: '500px',
      maxHeight: '90vh',
      borderRadius: '12px',
      overflowY: 'auto',
      boxShadow: '0 10px 30px rgba(0,0,0,0.4)',
      margin: '0 auto'
    },

    header: {
      textAlign: 'center',
      padding: '32px 24px 24px',
      position: 'relative',
      display: 'flex',
      flexDirection: 'column',
      alignItems: 'center',
      justifyContent: 'center',
      marginBottom: '8px'
    },

    closeButtonHeader: {
      position: 'absolute',
      top: '20px',
      right: '20px',
      background: 'none',
      border: 'none',
      fontSize: '24px',
      cursor: 'pointer',
      color: '#333',
      fontWeight: 'bold',
      padding: '4px 8px',
      borderRadius: '4px'
    },

    logo: {
      width: '160px',
      marginBottom: '16px'
    },

    title: {
      fontSize: '24px',
      fontWeight: 700,
      margin: '8px 0 0 0',
      color: '#333'
    },

    section: {
      padding: '0 32px',
      margin: '24px 0'
    },

    label: {
      fontWeight: 600,
      fontSize: '15px',
      marginBottom: '12px',
      display: 'block',
      color: '#333'
    },

    ratingGrid: {
      display: 'flex',
      gap: '8px',
      justifyContent: 'space-between',
      marginTop: '8px'
    },

    ratingBox: {
      width: '38px',
      height: '38px',
      borderRadius: '6px',
      border: '1px solid #ddd',
      fontSize: '14px',
      display: 'flex',
      justifyContent: 'center',
      alignItems: 'center',
      cursor: 'pointer',
      background: '#fff',
      transition: 'all 0.2s ease'
    },

    ratingSelected: {
      background: '#000',
      color: '#fff',
      borderColor: '#000'
    },

    select: {
      width: '100%',
      padding: '14px 12px',
      borderRadius: '6px',
      border: '1px solid #ddd',
      fontSize: '15px',
      marginTop: '4px',
      backgroundColor: '#fff',
      color: '#333'
    },

    textarea: {
      width: '100%',
      padding: '14px 12px',
      borderRadius: '6px',
      border: '1px solid #ddd',
      fontSize: '15px',
      resize: 'vertical',
      marginTop: '4px',
      minHeight: '120px',
      fontFamily: 'inherit',
      backgroundColor: '#fff',
      color: '#333'
    },

    radioRow: {
      display: 'flex',
      gap: '24px',
      marginTop: '12px'
    },

    radioOption: {
      display: 'flex',
      alignItems: 'center',
      gap: '8px',
      cursor: 'pointer'
    },

    radioInput: {
      margin: 0,
      width: '18px',
      height: '18px',
      cursor: 'pointer'
    },

    radioLabel: {
      fontSize: '15px',
      color: '#333',
      cursor: 'pointer'
    },

    privacySection: {
      padding: '24px 32px',
      borderTop: '1px solid #e5e5e5',
      margin: '16px 0 0 0',
      backgroundColor: '#fafafa'
    },

    privacyText: {
      fontSize: '12px',
      color: '#666',
      textAlign: 'center',
      margin: 0,
      lineHeight: '1.5'
    },

    privacyLink: {
      color: '#000',
      textDecoration: 'underline',
      fontWeight: 500
    },

    actions: {
      display: 'flex',
      justifyContent: 'flex-end',
      gap: '16px',
      padding: '24px 32px',
      borderTop: '1px solid #e5e5e5',
      marginTop: '8px'
    },

    closeButton: {
      padding: '14px 28px',
      background: '#fff',
      borderRadius: '6px',
      border: '1px solid #ccc',
      cursor: 'pointer',
      fontWeight: 600,
      fontSize: '14px',
      color: '#333',
      transition: 'all 0.2s ease'
    },

    submitButton: {
      padding: '14px 28px',
      background: '#000',
      color: '#fff',
      borderRadius: '6px',
      border: 'none',
      cursor: 'pointer',
      fontWeight: 600,
      fontSize: '14px',
      transition: 'all 0.2s ease'
    },

    submitButtonDisabled: {
      background: '#ccc',
      cursor: 'not-allowed'
    },

    poweredBy: {
      textAlign: 'right',
      padding: '20px 32px',
      borderTop: '1px solid #e5e5e5',
      fontSize: '12px',
      color: '#666',
      background: '#f9f9f9'
    },

    // Camera icon styles
    cameraIcon: {
      position: 'absolute',
      bottom: '75px',
      left: '32px',
      background: 'transparent',
      border: 'none',
      cursor: 'pointer',
      color: '#666',
      fontSize: '20px',
      padding: '8px',
      borderRadius: '4px',
      zIndex: 1,
      transition: 'all 0.2s ease'
    }
  };

  const handleCameraClick = () => {
    console.log('Camera icon clicked');
  };

  if (!isMounted) return null;

  return (
    <>
      {/* Feedback Button */}
      <button
        style={styles.feedbackButton}
        className="feedbackButton"
        onClick={toggleForm}
        onMouseOver={(e) => {
          e.target.style.background = '#333';
        }}
        onMouseOut={(e) => {
          e.target.style.background = '#000';
        }}
      >
        Feedback
      </button>

      {/* Overlay + Modal */}
      {isOpen && (
        <div style={styles.overlay}>
          <div style={styles.feedbackForm} className="feedbackForm">

            {/* Camera Icon */}
            <button 
              style={styles.cameraIcon}
              onClick={handleCameraClick}
              aria-label="Take screenshot"
              title="Take screenshot"
              onMouseOver={(e) => {
                e.target.style.background = '#f5f5f5';
                e.target.style.color = '#333';
              }}
              onMouseOut={(e) => {
                e.target.style.background = 'transparent';
                e.target.style.color = '#666';
              }}
            >
              📷
            </button>

            {/* Header */}
            <div style={styles.header}>
              <button 
                style={styles.closeButtonHeader}
                onClick={() => setIsOpen(false)}
                aria-label="Close feedback form"
                onMouseOver={(e) => {
                  e.target.style.background = '#f5f5f5';
                }}
                onMouseOut={(e) => {
                  e.target.style.background = 'transparent';
                }}
              >
                ×
              </button>
              <img
                src="https://resources.digital-cloud-west.medallia.com/wdcwest/132892/resources/image/1640028257818_TNF_Logo_No_Box__Small_2018_BLACK.png"
                style={styles.logo}
                alt="The North Face"
              />
              <h2 style={styles.title}>We&#39;d love your feedback!</h2>
            </div>

            {/* Rating */}
            <div style={styles.section}>
              <label style={styles.label}>
                Overall, how satisfied are you with the website? *
              </label>
              <div style={styles.ratingGrid}>
                {Array.from({ length: 11 }, (_, i) => (
                  <div
                    key={i}
                    style={{
                      ...styles.ratingBox,
                      ...(satisfactionScore === i ? styles.ratingSelected : {})
                    }}
                    onClick={() => setSatisfactionScore(i)}
                    onMouseOver={(e) => {
                      if (satisfactionScore !== i) {
                        e.target.style.borderColor = '#000';
                        e.target.style.background = '#f8f9fa';
                      }
                    }}
                    onMouseOut={(e) => {
                      if (satisfactionScore !== i) {
                        e.target.style.borderColor = '#ddd';
                        e.target.style.background = '#fff';
                      }
                    }}
                  >
                    {i}
                  </div>
                ))}
              </div>
            </div>

            {/* Visit purpose */}
            <div style={styles.section}>
              <label style={styles.label}>What was the main purpose for your visit today?</label>
              <select
                style={styles.select}
                value={visitPurpose}
                onChange={(e) => setVisitPurpose(e.target.value)}
                onFocus={(e) => {
                  e.target.style.outline = 'none';
                  e.target.style.borderColor = '#000';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#ddd';
                }}
              >
                <option value="">Please Select Option</option>
                <option value="Browse">Browse / Discover new products</option>
                <option value="Purchase">Purchase a specific product</option>
                <option value="Info">Find product information</option>
                <option value="Gift">Buy a gift</option>
                <option value="Account">Update my account</option>
                <option value="Status">Check order status</option>
                <option value="XPLR">Join XPLR Pass</option>
                <option value="Other">Other</option>
              </select>
            </div>

            {/* Completion */}
            <div style={styles.section}>
              <label style={styles.label}>Were you able to complete your primary purpose for today&#39;s visit?</label>
              <select
                style={styles.select}
                value={completedPurpose}
                onChange={(e) => setCompletedPurpose(e.target.value)}
                onFocus={(e) => {
                  e.target.style.outline = 'none';
                  e.target.style.borderColor = '#000';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#ddd';
                }}
              >
                <option value="">Please Select Option</option>
                <option value="Yes">Yes</option>
                <option value="No">No</option>
                <option value="Not yet">Not yet done</option>
              </select>
            </div>

            {/* Feedback */}
            <div style={styles.section}>
              <label style={styles.label}>
                We appreciate your feedback. Please tell us the most important thing we could do to improve your experience.
              </label>
              <textarea
                style={styles.textarea}
                rows={4}
                value={feedback}
                onChange={(e) => setFeedback(e.target.value)}
                placeholder="Share your thoughts..."
                onFocus={(e) => {
                  e.target.style.outline = 'none';
                  e.target.style.borderColor = '#000';
                }}
                onBlur={(e) => {
                  e.target.style.borderColor = '#ddd';
                }}
              />
            </div>

            {/* Loyalty */}
            <div style={styles.section}>
              <label style={styles.label}>Are you a loyalty member?</label>
              <div style={styles.radioRow}>
                <label style={styles.radioOption}>
                  <input
                    type="radio"
                    name="loyalty"
                    value="Yes"
                    checked={isLoyaltyMember === 'Yes'}
                    onChange={(e) => setIsLoyaltyMember(e.target.value)}
                    style={styles.radioInput}
                  />
                  <span style={styles.radioLabel}>Yes</span>
                </label>
                <label style={styles.radioOption}>
                  <input
                    type="radio"
                    name="loyalty"
                    value="No"
                    checked={isLoyaltyMember === 'No'}
                    onChange={(e) => setIsLoyaltyMember(e.target.value)}
                    style={styles.radioInput}
                  />
                  <span style={styles.radioLabel}>No</span>
                </label>
              </div>
            </div>

            {/* Privacy Policy Section */}
            <div style={styles.privacySection}>
              <p style={styles.privacyText}>
                Your responses will be used in accordance with our{' '}
                <a 
                  href="https://www.thenorthface.com/help/privacy.html" 
                  target="_blank" 
                  rel="noopener noreferrer"
                  style={styles.privacyLink}
                  onMouseOver={(e) => {
                    e.target.style.color = '#333';
                  }}
                  onMouseOut={(e) => {
                    e.target.style.color = '#000';
                  }}
                >
                  privacy policy
                </a>.
              </p>
            </div>

            {/* Actions */}
            <div style={styles.actions}>
              <button 
                style={styles.closeButton} 
                onClick={() => setIsOpen(false)}
                onMouseOver={(e) => {
                  e.target.style.background = '#f5f5f5';
                  e.target.style.borderColor = '#000';
                }}
                onMouseOut={(e) => {
                  e.target.style.background = '#fff';
                  e.target.style.borderColor = '#ccc';
                }}
              >
                Close
              </button>

              <button
                style={{
                  ...styles.submitButton,
                  ...(!satisfactionScore && styles.submitButtonDisabled)
                }}
                disabled={!satisfactionScore}
                onClick={handleSubmit}
                onMouseOver={(e) => {
                  if (satisfactionScore) {
                    e.target.style.background = '#333';
                  }
                }}
                onMouseOut={(e) => {
                  if (satisfactionScore) {
                    e.target.style.background = '#000';
                  }
                }}
              >
                Submit
              </button>
            </div>

            {/* Powered by Medallia Footer */}
            <div style={styles.poweredBy}>
              Powered by Medallia
            </div>

          </div>
        </div>
      )}
    </>
  );
};

export default FeedbackForm;