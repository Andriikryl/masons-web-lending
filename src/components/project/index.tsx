import styles from "./style.module.css";

interface Imodul {
  setModal: React.Dispatch<
    React.SetStateAction<{
      active: boolean;
      index: number;
    }>
  >;
  index: number;
  title: string;
}

export default function index({ index, title, setModal }: Imodul) {
  return (
    <div
      onMouseEnter={() => {
        setModal({ active: true, index });
      }}
      onMouseLeave={() => {
        setModal({ active: false, index });
      }}
      className={styles.project}
    >
      <h2>{title}</h2>
    </div>
  );
}
