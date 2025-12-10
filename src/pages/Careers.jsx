import React, { useState } from 'react';
import HeroSection from '../components/HeroSection';
import './Careers.css';

const Careers = () => {
    const [openDepartment, setOpenDepartment] = useState(null);

    const toggleDepartment = (deptId) => {
        setOpenDepartment(openDepartment === deptId ? null : deptId);
    };

    const departments = [
        {
            id: 'it-staffing',
            name: 'IT Staffing & Recruitment',
            icon: '💻',
            positions: [
                {
                    title: 'Senior Full Stack Developer',
                    location: 'Remote',
                    type: 'Full-time',
                    description: 'We\'re looking for an experienced full stack developer proficient in React, Node.js, and cloud technologies.',
                    tags: ['React', 'Node.js', 'AWS', 'TypeScript']
                },
                {
                    title: 'Frontend Developer',
                    location: 'Remote',
                    type: 'Full-time',
                    description: 'Join our team to build beautiful, responsive user interfaces using modern frontend technologies.',
                    tags: ['React', 'Vue.js', 'CSS', 'JavaScript']
                },
                {
                    title: 'DevOps Engineer',
                    location: 'Remote',
                    type: 'Full-time',
                    description: 'Help us build and maintain scalable infrastructure and CI/CD pipelines.',
                    tags: ['Docker', 'Kubernetes', 'AWS', 'CI/CD']
                }
            ]
        },
        {
            id: 'non-it-staffing',
            name: 'Non-IT Staffing & Recruitment',
            icon: '👔',
            positions: [
                {
                    title: 'Business Development Manager',
                    location: 'Mumbai, India',
                    type: 'Full-time',
                    description: 'Drive business growth by identifying new opportunities and building client relationships.',
                    tags: ['Sales', 'Strategy', 'Client Relations', 'Growth']
                },
                {
                    title: 'HR Specialist',
                    location: 'Remote',
                    type: 'Full-time',
                    description: 'Manage recruitment processes and employee relations for our growing team.',
                    tags: ['Recruitment', 'HR', 'People Management']
                }
            ]
        },
        {
            id: 'business-professionals',
            name: 'Business Professionals',
            icon: '📊',
            positions: [
                {
                    title: 'Project Manager',
                    location: 'Remote',
                    type: 'Full-time',
                    description: 'Lead cross-functional teams to deliver projects on time and within budget.',
                    tags: ['Agile', 'Scrum', 'Leadership', 'Communication']
                },
                {
                    title: 'Business Analyst',
                    location: 'Remote',
                    type: 'Contract',
                    description: 'Analyze business requirements and translate them into technical specifications.',
                    tags: ['Analysis', 'Requirements', 'Documentation']
                }
            ]
        },
        {
            id: 'contract-staffing',
            name: 'Contract Staffing',
            icon: '📝',
            positions: [
                {
                    title: 'Contract Software Engineer',
                    location: 'Remote',
                    type: 'Contract (6 months)',
                    description: 'Short-term engagement for a critical project requiring immediate expertise.',
                    tags: ['Python', 'Django', 'PostgreSQL']
                }
            ]
        },
        {
            id: 'software-development',
            name: 'Software Development',
            icon: '⚙️',
            positions: [
                {
                    title: 'Backend Developer',
                    location: 'Remote',
                    type: 'Full-time',
                    description: 'Build robust and scalable backend systems using modern technologies.',
                    tags: ['Node.js', 'Python', 'Microservices', 'API']
                },
                {
                    title: 'Mobile Developer',
                    location: 'Remote',
                    type: 'Full-time',
                    description: 'Create amazing mobile experiences for iOS and Android platforms.',
                    tags: ['React Native', 'Flutter', 'iOS', 'Android']
                }
            ]
        },
        {
            id: 'software-consulting',
            name: 'Software Consulting',
            icon: '🎯',
            positions: [
                {
                    title: 'Technical Consultant',
                    location: 'Remote',
                    type: 'Full-time',
                    description: 'Provide expert guidance on architecture, technology stack, and best practices.',
                    tags: ['Architecture', 'Strategy', 'Consulting']
                }
            ]
        }
    ];

    return (
        <div className="careers-page">
            <HeroSection
                title="Build Your Career with Sunsys Global"
                subtitle="🚀 Join Our Global Team"
                description="Become part of an elite network of developers working on cutting-edge projects worldwide. At Sunsys Global, we invest in your growth and celebrate your success."
                primaryButtonText="Explore Opportunities"
                secondaryButtonText="Learn More"
                imageSrc="https://illustrations.popsy.co/blue/working.svg"
                imageAlt="Career opportunities at Sunsys Global"
                showStats={false}
            />

            {/* Why Join Section */}
            <section className="why-join-section">
                <div className="container">
                    <div className="section-header">
                        <h2>Why Join Sunsys Global?</h2>
                        <p>Be part of a team that values innovation, growth, and excellence</p>
                    </div>

                    <div className="why-join-grid">
                        <div className="why-join-card">
                            <div className="why-join-icon">🚀</div>
                            <h3>Career Growth</h3>
                            <p>
                                Continuous learning opportunities and clear career progression paths
                                to help you reach your full potential.
                            </p>
                        </div>

                        <div className="why-join-card">
                            <div className="why-join-icon">💼</div>
                            <h3>Exciting Projects</h3>
                            <p>
                                Work on cutting-edge projects with the latest technologies across
                                diverse industries.
                            </p>
                        </div>

                        <div className="why-join-card">
                            <div className="why-join-icon">🌍</div>
                            <h3>Remote Flexibility</h3>
                            <p>
                                Enjoy the freedom of remote work with flexible hours that fit your
                                lifestyle.
                            </p>
                        </div>

                        <div className="why-join-card">
                            <div className="why-join-icon">🤝</div>
                            <h3>Collaborative Culture</h3>
                            <p>
                                Join a supportive team that values collaboration, creativity, and
                                mutual respect.
                            </p>
                        </div>

                        <div className="why-join-card">
                            <div className="why-join-icon">💰</div>
                            <h3>Competitive Compensation</h3>
                            <p>
                                Attractive salary packages and benefits that recognize your skills
                                and contributions.
                            </p>
                        </div>

                        <div className="why-join-card">
                            <div className="why-join-icon">🎯</div>
                            <h3>Work-Life Balance</h3>
                            <p>
                                We believe in maintaining a healthy balance between professional
                                and personal life.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* Open Positions by Department */}
            <section className="positions-section">
                <div className="container">
                    <div className="section-header">
                        <h2>Open Positions by Department</h2>
                        <p>Explore opportunities across different specializations</p>
                    </div>

                    <div className="departments-accordion">
                        {departments.map((dept) => (
                            <div key={dept.id} className="department-item">
                                <button
                                    className={`department-header ${openDepartment === dept.id ? 'active' : ''}`}
                                    onClick={() => toggleDepartment(dept.id)}
                                >
                                    <div className="department-header-content">
                                        <span className="department-icon">{dept.icon}</span>
                                        <h3>{dept.name}</h3>
                                        <span className="position-count">
                                            {dept.positions.length} {dept.positions.length === 1 ? 'Position' : 'Positions'}
                                        </span>
                                    </div>
                                    <span className={`dropdown-arrow ${openDepartment === dept.id ? 'open' : ''}`}>
                                        ▼
                                    </span>
                                </button>

                                <div className={`department-positions ${openDepartment === dept.id ? 'open' : ''}`}>
                                    {dept.positions.map((position, index) => (
                                        <div key={index} className="position-card">
                                            <div className="position-header">
                                                <div>
                                                    <h3>{position.title}</h3>
                                                    <div className="position-meta">
                                                        <span className="position-location">🌍 {position.location}</span>
                                                        <span className="position-type">💼 {position.type}</span>
                                                    </div>
                                                </div>
                                                <button className="custom-button custom-button--primary custom-button--medium">
                                                    Apply Now
                                                </button>
                                            </div>
                                            <p className="position-description">
                                                {position.description}
                                            </p>
                                            <div className="position-tags">
                                                {position.tags.map((tag, tagIndex) => (
                                                    <span key={tagIndex} className="tag">{tag}</span>
                                                ))}
                                            </div>
                                        </div>
                                    ))}
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* Interview Process Section */}
            <section className="interview-process-section">
                <div className="container">
                    <div className="section-header">
                        <h2>Our Interview Process</h2>
                        <p>What to expect when you apply</p>
                    </div>

                    <div className="process-steps">
                        <div className="step">
                            <div className="step-number">1</div>
                            <h3>Application Review</h3>
                            <p>We review your application and resume carefully.</p>
                        </div>

                        <div className="step">
                            <div className="step-number">2</div>
                            <h3>Initial Screening</h3>
                            <p>A brief call to discuss your background and interests.</p>
                        </div>

                        <div className="step">
                            <div className="step-number">3</div>
                            <h3>Technical Interview</h3>
                            <p>Showcase your skills through coding challenges and discussions.</p>
                        </div>

                        <div className="step">
                            <div className="step-number">4</div>
                            <h3>Final Interview</h3>
                            <p>Meet the team and discuss culture fit and expectations.</p>
                        </div>

                        <div className="step">
                            <div className="step-number">5</div>
                            <h3>Welcome Aboard</h3>
                            <p>Receive your offer and join the Sunsys Global family!</p>
                        </div>
                    </div>
                </div>
            </section>
        </div>
    );
};

export default Careers;
