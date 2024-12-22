import './Risco.css';

function PartOne(props) {
    return (
        <>
            <div className="container">
                <h1 className="TituloPrincipal">{props.nome}</h1>
                <div className="Faixaa"></div>
                <div className="TextBox">
                    <article>{props.text}</article>
                </div>
            </div>
        </>
    );
}


let myObserver = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        if (entry.isIntersecting) {
            entry.target.classList.add('Visible');
        } else {
            entry.target.classList.remove('Visible');
        }
    });
});

let elements = document.querySelectorAll('.TituloPrincipal, .TextBox, .Faixaa');

elements.forEach((element) => {
    myObserver.observe(element);
});


export default PartOne