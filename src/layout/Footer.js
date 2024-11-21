import React from "react";
import { Link } from "react-router-dom";

const Footer = () => {
    return (
        <footer style={styles.footer}>
            <div style={styles.container}>
                {/* Left Section */}
                <div style={styles.section}>
                    <h3 style={styles.brandTitle}>МЗаал</h3>
                    <p>
                        <strong>Утас:</strong>{" "}
                        <a
                            href="tel:+97686693423"
                            style={styles.link}
                            aria-label="Call us at +976 86693423"
                        >
                            +976 86693423
                        </a>
                    </p>
                    <p>
                        <strong>Хаяг:</strong> Чингисийн Өргөн Чөлөө-6, Стадион
                        Оргил-1, Хан-Уул Дүүрэг 15-р хороо, Улаанбаатар, 17010,
                        Монгол Улс
                    </p>
                    <p>
                        <strong>Email:</strong>{" "}
                        <a
                            href="mailto:MZaal@info.com"
                            style={styles.link}
                            aria-label="Email us at MZaal@info.com"
                        >
                            MZaal@info.com
                        </a>
                    </p>
                </div>

                {/* Middle Left Section */}
                <div style={styles.section}>
                    <h4 style={styles.sectionTitle}>ҮНДСЭН КАТЕГОРИ</h4>
                    <ul style={styles.list}>
                        {[
                            { label: "Санал хүсэлт", href: "#" },
                            { label: "Хамтран ажиллах", href: "#" },
                            { label: "Баннер байршуулах", href: "#" },
                            { label: "Үйлчилгээний нөхцөл", href: "#" },
                            {
                                label: "Бүх заруудыг харах →",
                                href: "#",
                                highlight: true,
                            },
                        ].map((item, index) => (
                            <li key={index} style={styles.listItem}>
                                <a
                                    href={item.href}
                                    style={{
                                        ...styles.link,
                                        color: item.highlight
                                            ? "#ffcc00"
                                            : "white",
                                        fontWeight: item.highlight
                                            ? "bold"
                                            : "normal",
                                    }}
                                    onMouseEnter={(e) =>
                                        (e.target.style.color = "#ff4c00")
                                    }
                                    onMouseLeave={(e) =>
                                        (e.target.style.color = item.highlight
                                            ? "#ffcc00"
                                            : "white")
                                    }
                                >
                                    {item.label}
                                </a>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Middle Right Section */}
                <div style={styles.section}>
                    <h4 style={styles.sectionTitle}>ЗААВАР</h4>
                    <ul style={styles.list}>
                        {[
                            "Захиалга хийх заавар",
                            "Хэрхэн гэрээ хийх вэ?",
                            "Хэрхэн заалаа байршуулах вэ?",
                            "Төлбөрийн хэрэгсэл холбох",
                            "Хориглох зүйлс",
                        ].map((item, index) => (
                            <li key={index} style={styles.listItem}>
                                <Link
                                    href="#"
                                    style={styles.link}
                                    onMouseEnter={(e) =>
                                        (e.target.style.color = "#ff4c00")
                                    }
                                    onMouseLeave={(e) =>
                                        (e.target.style.color = "white")
                                    }
                                >
                                    {item}
                                </Link>
                            </li>
                        ))}
                    </ul>
                </div>

                {/* Right Section */}
                <div style={{ ...styles.section, textAlign: "center" }}>
                    <h4 style={styles.sectionTitle}>АППЛИКЕЙШН ТАТАХ</h4>
                    <div style={styles.badges}>
                        <Link
                            href="#"
                            style={styles.badge}
                            aria-label="Download on Google Play"
                        >
                            <img
                                src="https://upload.wikimedia.org/wikipedia/commons/5/5f/Google_Play_Store_badge_EN.svg"
                                alt="Google Play"
                                style={styles.badgeImage}
                            />
                        </Link>
                        <Link
                            href="#"
                            style={styles.badge}
                            aria-label="Download on the App Store"
                        >
                            <img
                                src="https://developer.apple.com/assets/elements/badges/download-on-the-app-store.svg"
                                alt="App Store"
                                style={styles.badgeImage}
                            />
                        </Link>
                    </div>
                    <h4 style={styles.sectionTitle}>Биднийг дага:</h4>
                    <div style={styles.socialIcons}>
                        {["Twitter", "Facebook", "Reddit", "Instagram"].map(
                            (platform, index) => (
                                <Link
                                    href="#"
                                    key={index}
                                    style={styles.socialIcon}
                                    onMouseEnter={(e) =>
                                        (e.target.style.color = "#ff4c00")
                                    }
                                    onMouseLeave={(e) =>
                                        (e.target.style.color = "white")
                                    }
                                    aria-label={`Follow us on ${platform}`}
                                >
                                    {platform}
                                </Link>
                            )
                        )}
                    </div>
                </div>
            </div>
        </footer>
    );
};

const styles = {
    footer: {
        backgroundColor: "#1a1a1a",
        color: "white",
        padding: "40px 20px",
    },
    container: {
        display: "flex",
        justifyContent: "space-between",
        flexWrap: "wrap",
    },
    section: {
        flexBasis: "25%",
        minWidth: "250px",
        marginBottom: "20px",
    },
    brandTitle: {
        color: "#ff4c00",
        marginBottom: "10px",
    },
    sectionTitle: {
        marginBottom: "10px",
    },
    list: {
        listStyleType: "none",
        padding: 0,
        margin: 0,
    },
    listItem: {
        marginBottom: "8px",
    },
    link: {
        color: "white",
        textDecoration: "none",
        transition: "color 0.3s",
    },
    badges: {
        marginBottom: "20px",
        display: "flex",
        justifyContent: "center",
        gap: "10px",
    },
    badge: {
        display: "inline-block",
        margin: "0 5px",
    },
    badgeImage: {
        maxWidth: "150px",
    },
    socialIcons: {
        display: "flex",
        justifyContent: "center",
        gap: "15px",
        fontSize: "18px",
    },
    socialIcon: {
        color: "white",
        textDecoration: "none",
        transition: "color 0.3s",
    },
};

export default Footer;
