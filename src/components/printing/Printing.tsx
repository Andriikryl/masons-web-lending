import styles from "./style.module.css";
import { useState } from "react";
import Project from "../project/index";
import Modal from "../modal/index";
import { Container } from "../container/Container";

const projects = [
  {
    title: "C2 Montreal",
    src: "c2montreal.png",
    color: "#000000",
  },
  {
    title: "Office Studio",
    src: "officestudio.png",
    color: "#8C8C8C",
  },
  {
    title: "Locomotive",
    src: "locomotive.png",
    color: "#EFE8D3",
  },
  {
    title: "Silencio",
    src: "silencio.png",
    color: "#706D63",
  },
];

export default function Printing() {
  const [modal, setModal] = useState({ active: false, index: 0 });

  return (
    <section className={styles.Printing}>
      <Container>
        <div className="">
          <h2 className={styles.printing__title}>PRINTING ON</h2>
          {projects.map((project, index) => {
            return (
              <div className={styles.printing__box}>
                <Project
                  index={index}
                  title={project.title}
                  setModal={setModal}
                  key={index}
                />
                <Project
                  index={index}
                  title={project.title}
                  setModal={setModal}
                  key={index}
                />
              </div>
            );
          })}
          <Modal modal={modal} projects={projects} />
        </div>
        <div className={styles.Printing__box_btn}>
          <button className={styles.Printing__btn}>Open full catalog</button>
        </div>
      </Container>
    </section>
  );
}
