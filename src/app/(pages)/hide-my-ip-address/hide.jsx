'use client'

import { useEffect, useState } from 'react'
import Link from 'next/link';
import "./hide.scss";

const Hide = () => {
    const [activeTab, setActiveTab] = useState('vpn');

    useEffect(() => {
        // Add structured data for SEO
        const structuredData = {
          "@context": "https://schema.org",
          "@type": "Article",
          "headline": "How to Hide Your IP Address - Complete Privacy Guide",
          "description": "Learn effective methods to hide your IP address and protect your online identity using VPNs, proxies, and privacy tools.",
          "author": {
            "@type": "Organization",
            "name": "м17"
          },
          "publisher": {
            "@type": "Organization",
            "name": "My Device Size",
            "logo": {
              "@type": "ImageObject",
              "url": "https://mydevicesize.uz/favicon.ico"
            }
          },
          "datePublished": new Date().toISOString().split('T')[0],
          "mainEntityOfPage": {
            "@type": "WebPage",
            "@id": "https://mydevicesize.uz/hide-my-ip-address"
          }
        };

        const script = document.createElement('script');
        script.type = 'application/ld+json';
        script.text = JSON.stringify(structuredData);
        script.id = 'structured-data-hide-ip';
        
        const existingScript = document.getElementById('structured-data-hide-ip');
        if (existingScript) {
          existingScript.remove();
        }
        
        document.head.appendChild(script);
        
        return () => {
          if (script.parentNode) {
            script.parentNode.removeChild(script);
          }
        };
    }, []);

    const vpns = [
        {
            name: "NordVPN",
            rating: 9.7,
            features: ["Military-grade encryption", "6000+ servers", "No-logs policy", "Kill switch", "Double VPN"],
            bestFor: "Overall security & speed",
            link: "https://nordvpn.com"
        },
        {
            name: "Surfshark",
            rating: 9.5,
            features: ["Unlimited devices", "CleanWeb ad blocker", "Camouflage mode", "NoBorders mode", "MultiHop"],
            bestFor: "Multiple device users",
            link: "https://surfshark.com"
        },
        {
            name: "ExpressVPN",
            rating: 9.3,
            features: ["Lightning-fast speeds", "3000+ servers", "TrustedServer technology", "Split tunneling", "Network lock"],
            bestFor: "Streaming & speed",
            link: "https://expressvpn.com"
        },
        {
            name: "CyberGhost",
            rating: 9.1,
            features: ["7700+ servers", "45-day money-back", "NoSpy servers", "WiFi protection", "Streaming optimized"],
            bestFor: "Beginner-friendly",
            link: "https://cyberghostvpn.com"
        },
        {
            name: "IPVanish",
            rating: 8.9,
            features: ["Unlimited bandwidth", "40,000+ IPs", "SOCKS5 proxy", "SugarSync storage", "24/7 support"],
            bestFor: "Torrenting & P2P",
            link: "https://ipvanish.com"
        }
    ];

    const privacyMethods = [
        {
            method: "VPN Service",
            effectiveness: "Very High",
            speed: "Fast",
            security: "Excellent",
            cost: "$$",
            description: "Most effective way to hide your IP. Encrypts all traffic and routes through secure servers."
        },
        {
            method: "Proxy Server",
            effectiveness: "Medium",
            speed: "Moderate",
            security: "Basic",
            cost: "$",
            description: "Routes traffic through intermediary server. Good for basic IP hiding but less secure."
        },
        {
            method: "Tor Browser",
            effectiveness: "High",
            speed: "Slow",
            security: "Very High",
            cost: "Free",
            description: "Routes traffic through multiple volunteer-run servers. Maximum anonymity but slow."
        },
        {
            method: "Public WiFi",
            effectiveness: "Low",
            speed: "Variable",
            security: "Poor",
            cost: "Free",
            description: "Uses different network IP but exposes you to other security risks."
        }
    ];

    return (
        <div id='hide-my-ip-address'>
            <div className="page-header">
                <h1>Hide My IP Address</h1>
                <p className="subtitle">Complete Guide to Protecting Your Online Identity and Privacy</p>
            </div>

            <div className="hero-section">
                <div className="hero-image">
                    <img 
                        src="https://whatismyipaddress.com/wp-content/uploads/shark-goldfish-masks2-768x292.jpg" 
                        alt="Online Privacy and IP Hiding Illustration" 
                    />
                </div>
                <div className="hero-content">
                    <h2>Why Hide Your IP Address?</h2>
                    <p>Your IP address reveals your location, internet activity, and can be used to track you online. Hiding it protects your privacy and security.</p>
                    <div className="hero-stats">
                        <div className="stat">
                            <span className="number">85%</span>
                            <span className="label">of internet users are tracked</span>
                        </div>
                        <div className="stat">
                            <span className="number">3.5B</span>
                            <span className="label">data records exposed in 2023</span>
                        </div>
                        <div className="stat">
                            <span className="number">67%</span>
                            <span className="label">of people hide IP for privacy</span>
                        </div>
                    </div>
                </div>
            </div>

            <div className="content-container">
                <div className="method-tabs">
                    <button 
                        className={`tab ${activeTab === 'vpn' ? 'active' : ''}`}
                        onClick={() => setActiveTab('vpn')}
                    >
                        VPN Recommendations
                    </button>
                    <button 
                        className={`tab ${activeTab === 'methods' ? 'active' : ''}`}
                        onClick={() => setActiveTab('methods')}
                    >
                        Privacy Methods
                    </button>
                    <button 
                        className={`tab ${activeTab === 'guide' ? 'active' : ''}`}
                        onClick={() => setActiveTab('guide')}
                    >
                        Step-by-Step Guide
                    </button>
                </div>

                {activeTab === 'vpn' && (
                    <div className="tab-content">
                        <h2>Top VPN Services to Hide Your IP</h2>
                        <p className="section-intro">We've tested and reviewed dozens of VPN services. These are our top recommendations for hiding your IP address effectively:</p>
                        
                        <div className="vpn-grid">
                            {vpns.map((vpn, index) => (
                                <div key={index} className="vpn-card">
                                    <div className="vpn-header">
                                        <h3>{vpn.name}</h3>
                                        <div className="rating">
                                            <span className="stars">★★★★★</span>
                                            <span className="score">{vpn.rating}/10</span>
                                        </div>
                                    </div>
                                    <div className="vpn-features">
                                        <ul>
                                            {vpn.features.map((feature, idx) => (
                                                <li key={idx}>{feature}</li>
                                            ))}
                                        </ul>
                                    </div>
                                    <div className="vpn-footer">
                                        <span className="best-for">Best for: {vpn.bestFor}</span>
                                        <a 
                                            href={vpn.link} 
                                            target="_blank" 
                                            rel="noopener noreferrer"
                                            className="vpn-link"
                                        >
                                            Visit Website
                                        </a>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                )}

                {activeTab === 'methods' && (
                    <div className="tab-content">
                        <h2>Different Methods to Hide Your IP</h2>
                        <p>Choose the method that best fits your needs based on effectiveness, speed, and security:</p>
                        
                        <div className="methods-table">
                            <table>
                                <thead>
                                    <tr>
                                        <th>Method</th>
                                        <th>Effectiveness</th>
                                        <th>Speed</th>
                                        <th>Security</th>
                                        <th>Cost</th>
                                        <th>Description</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {privacyMethods.map((method, index) => (
                                        <tr key={index}>
                                            <td><strong>{method.method}</strong></td>
                                            <td>
                                                <span className={`effectiveness ${method.effectiveness.toLowerCase().replace(' ', '-')}`}>
                                                    {method.effectiveness}
                                                </span>
                                            </td>
                                            <td>{method.speed}</td>
                                            <td>{method.security}</td>
                                            <td>{method.cost}</td>
                                            <td>{method.description}</td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>
                        
                        <div className="method-comparison">
                            <h3>Quick Comparison</h3>
                            <div className="comparison-grid">
                                <div className="comparison-item">
                                    <h4>VPN</h4>
                                    <p>Best overall choice for most users</p>
                                    <ul>
                                        <li>✅ Fast speeds</li>
                                        <li>✅ Strong encryption</li>
                                        <li>✅ Easy to use</li>
                                        <li>❌ Requires subscription</li>
                                    </ul>
                                </div>
                                <div className="comparison-item">
                                    <h4>Proxy</h4>
                                    <p>Good for quick IP changes</p>
                                    <ul>
                                        <li>✅ Free options available</li>
                                        <li>✅ Easy setup</li>
                                        <li>❌ No encryption</li>
                                        <li>❌ Can log your data</li>
                                    </ul>
                                </div>
                                <div className="comparison-item">
                                    <h4>Tor</h4>
                                    <p>Maximum anonymity</p>
                                    <ul>
                                        <li>✅ Completely free</li>
                                        <li>✅ Very secure</li>
                                        <li>❌ Very slow</li>
                                        <li>❌ Some sites block it</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                {activeTab === 'guide' && (
                    <div className="tab-content">
                        <h2>Step-by-Step Guide to Hide Your IP</h2>
                        
                        <div className="steps-container">
                            <div className="step">
                                <div className="step-number">1</div>
                                <div className="step-content">
                                    <h3>Choose Your Method</h3>
                                    <p>Decide between VPN (recommended), proxy, or Tor based on your needs:</p>
                                    <ul>
                                        <li><strong>VPN:</strong> Best for security, speed, and streaming</li>
                                        <li><strong>Proxy:</strong> Good for quick IP changes without encryption</li>
                                        <li><strong>Tor:</strong> Maximum anonymity but slower speeds</li>
                                    </ul>
                                </div>
                            </div>
                            
                            <div className="step">
                                <div className="step-number">2</div>
                                <div className="step-content">
                                    <h3>Select a Service Provider</h3>
                                    <p>If choosing VPN, select from our recommended providers above. Consider:</p>
                                    <ul>
                                        <li>Server locations you need</li>
                                        <li>Speed requirements</li>
                                        <li>Number of devices</li>
                                        <li>Price and money-back guarantee</li>
                                    </ul>
                                </div>
                            </div>
                            
                            <div className="step">
                                <div className="step-number">3</div>
                                <div className="step-content">
                                    <h3>Install and Configure</h3>
                                    <p>Download the app and follow setup instructions:</p>
                                    <ul>
                                        <li>Create an account with your chosen provider</li>
                                        <li>Download and install the software/app</li>
                                        <li>Log in with your credentials</li>
                                        <li>Select a server location</li>
                                    </ul>
                                </div>
                            </div>
                            
                            <div className="step">
                                <div className="step-number">4</div>
                                <div className="step-content">
                                    <h3>Verify Your New IP</h3>
                                    <p>Check that your IP is successfully hidden:</p>
                                    <ul>
                                        <li>Visit our <Link href="/ip-address-checker">IP Checker tool</Link></li>
                                        <li>Verify the IP shown is different from your real IP</li>
                                        <li>Check your location has changed</li>
                                        <li>Test websites that were previously blocked</li>
                                    </ul>
                                </div>
                            </div>
                        </div>
                    </div>
                )}

                <div className="main-content">
                    <div className="content-section">
                        <h2>Why You Should Hide Your IP Address</h2>
                        <p>Hiding your IP address provides several important benefits for your online security and privacy:</p>
                        
                        <div className="benefits-grid">
                            <div className="benefit">
                                <div className="benefit-icon">🔒</div>
                                <h3>Privacy Protection</h3>
                                <p>Prevent websites, advertisers, and ISPs from tracking your online activities and building profiles about you.</p>
                            </div>
                            
                            <div className="benefit">
                                <div className="benefit-icon">🌍</div>
                                <h3>Access Geo-Restricted Content</h3>
                                <p>Watch streaming services, access websites, and use apps that are blocked in your country or region.</p>
                            </div>
                            
                            <div className="benefit">
                                <div className="benefit-icon">🛡️</div>
                                <h3>Enhanced Security</h3>
                                <p>Protect yourself from hackers, especially when using public WiFi networks in cafes, airports, or hotels.</p>
                            </div>
                            
                            <div className="benefit">
                                <div className="benefit-icon">🚫</div>
                                <h3>Avoid Censorship</h3>
                                <p>Bypass internet censorship and access information freely without government or ISP restrictions.</p>
                            </div>
                        </div>
                    </div>
                    
                    <div className="content-section">
                        <h2>Common Misconceptions About Hiding IP</h2>
                        
                        <div className="misconception">
                            <h3>❌ "Hiding IP makes you completely anonymous"</h3>
                            <p><strong>Truth:</strong> While hiding your IP increases privacy, other tracking methods like cookies, browser fingerprinting, and login accounts can still identify you.</p>
                        </div>
                        
                        <div className="misconception">
                            <h3>❌ "All VPNs are the same"</h3>
                            <p><strong>Truth:</strong> VPN services vary greatly in security, speed, privacy policies, and features. Always choose reputable providers.</p>
                        </div>
                        
                        <div className="misconception">
                            <h3>❌ "Free VPNs are safe to use"</h3>
                            <p><strong>Truth:</strong> Many free VPNs make money by selling your data, showing ads, or have poor security. Paid VPNs are more trustworthy.</p>
                        </div>
                        
                        <div className="misconception">
                            <h3>❌ "Hiding IP is illegal"</h3>
                            <p><strong>Truth:</strong> In most countries, using VPNs and hiding your IP is perfectly legal for privacy protection. However, illegal activities remain illegal regardless of IP.</p>
                        </div>
                    </div>
                    
                    <div className="content-section">
                        <h2>Frequently Asked Questions</h2>
                        
                        <div className="faq-item">
                            <h3>Is hiding my IP address legal?</h3>
                            <p>Yes, in most countries it is completely legal to hide your IP address for privacy protection. However, using a VPN to commit illegal activities remains illegal.</p>
                        </div>
                        
                        <div className="faq-item">
                            <h3>Can my ISP see my activity if I use a VPN?</h3>
                            <p>Your ISP can see that you're connected to a VPN server, but they cannot see what websites you visit or what data you transfer through the encrypted connection.</p>
                        </div>
                        
                        <div className="faq-item">
                            <h3>How much does a good VPN cost?</h3>
                            <p>Quality VPNs typically cost between $2-10 per month, with significant discounts for longer subscriptions. Many offer 30-day money-back guarantees.</p>
                        </div>
                        
                        <div className="faq-item">
                            <h3>Will hiding my IP slow down my internet?</h3>
                            <p>VPNs may cause a slight speed reduction (10-20%) due to encryption and distance to servers. Premium VPNs minimize this impact with optimized servers.</p>
                        </div>
                    </div>
                </div>
                
                <div className="cta-section">
                    <h2>Ready to Protect Your Privacy?</h2>
                    <p>Start hiding your IP address today with our recommended VPN services:</p>
                    <div className="cta-buttons">
                        <a href="#vpn-recommendations" className="cta-button primary">
                            View VPN Recommendations
                        </a>
                        <Link href="/ip-address-checker" className="cta-button secondary">
                            Check Your Current IP
                        </Link>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Hide;