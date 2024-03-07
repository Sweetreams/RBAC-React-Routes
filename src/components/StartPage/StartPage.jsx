import "./StartPage.css"

const StartPage = () => {
  return (
    <section className="section_startPage">
        <div className="container">
            <div className="startPage_title">
                <h1 className="startPage_title-title">Добро пожаловать на начальную страницу</h1>
                <p className="startPage_title-text">Этот проект направлен на развитие навыков Fronend'a у обучаемого</p>
            </div>
            <div className="startPage_logo">
                <img src="../../assets/logo.svg" alt="alt" className="startPage_logo-img" />
            </div>
        </div>
    </section>
  )
}

export default StartPage