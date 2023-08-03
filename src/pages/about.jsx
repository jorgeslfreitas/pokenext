import Image from "next/image";
import styles from "../styles/About.module.css";

export default function About() {
    return (
        <div className={styles.about}>
            <h1>Sobre o projeto</h1>
            <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Excepturi asperiores aperiam facilis officiis. Dolore, nesciunt dignissimos hic quos, modi id, illo sit quaerat debitis doloremque suscipit veniam libero tempore reprehenderit!</p>
            <Image 
                src="/images/charizard.png"
                width="300"
                height="300"
                alt="Imagem do pokemon Charizard"
            />
        </div>
    )
}