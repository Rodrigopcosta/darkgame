import styles from './load.module.scss';

// Define o componente Load que aceita as props onClick e allItemsLoaded
function Load({ onClick, allItemsLoaded }) {
  return (
    // Contêiner principal para o componente de carregamento
    <div className={styles.loadContainer}>
      <div className={styles.bar}>
        {/* Barra de progresso que muda de estilo com base na prop allItemsLoaded */}
        <div
          className={`${styles.orangeBar} ${allItemsLoaded ? styles.full : ''}`}
        ></div>
      </div>
      <div className={styles.loadBtn}>
        {/* Botão que chama a função onClick ao ser pressionado */}
        <button onClick={onClick}>
          {/* Texto do botão que muda com base na prop allItemsLoaded */}
          <span>{allItemsLoaded ? 'Você já viu tudo' : 'Carregar mais'}</span>
        </button>
      </div>
    </div>
  );
}

// Exporta o componente Load como padrão
export default Load;
