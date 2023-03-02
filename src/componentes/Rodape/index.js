import './Rodape.css';

const Rodape = () => {
  return (
    <footer className="rodape">
      <section>
        <ul>
          <li>
            <a href="">
                <img src="/imagens/fb.png" alt="Logo Facebook"/>
            </a>
          </li>
          <li>
            <a href="">
                <img src="/imagens/tw.png" alt="Logo Twitter" />
            </a>
          </li>
          <li>
            <a>
            <img src="/imagens/ig.png" alt="Logo Instagram" />
            </a>
          </li>
        </ul>
        </section>
        <section>
        <img src="/imagens/logo.png" alt='Logo Organo' />
        </section>
        <section>
        <h6>Desenvolvido por Vinicius.</h6>
      </section>
    </footer>
  );
};

export default Rodape;
