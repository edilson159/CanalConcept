import Data from "../Data/Data";
import UseContext from "../Hook/UseContext";
import "./SummaryMenu.css";

const SummaryMenu = () => {
  const { detailsRef } = UseContext();

  //   useEffect(() => {
  //     // Função para definir a variável como false quando o componente for montado
  //     setSummaryOpen(false);

  //     // Se necessário, você pode retornar uma função de limpeza aqui
  //     return () => {
  //       // Código de limpeza (não necessário neste exemplo)
  //     };
  //   }, []); // O array vazio significa que o efeito será executado apenas uma vez após o primeiro render

  //   function toggleButton() {
  //     setSummaryOpen(!summaryOpen);

  //     console.log(summaryOpen);
  //   }
  return (
    <section className="container-summary-menu">
      {Data.find((e) => e.summaryMenu).summaryMenu.map(
        ({ title, children }, index) => (
          <details
            ref={detailsRef}
            className="container-summary-menu-details"
            key={index}
          >
            <summary className="container-summary-menu-summary">
              {title}
              <img className="summary-open" src="" alt="" />
            </summary>
            {children.map(({ name, link }, index) => (
              <a
                className="container-summary-menu-item"
                key={index}
                href={link}
              >
                {name}
              </a>
            ))}
          </details>
        )
      )}
    </section>
  );
};

export default SummaryMenu;
