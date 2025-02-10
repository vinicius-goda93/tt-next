const { default: Link } = require("next/link");

export function Breadcrumb({ pageId, title }) {
    return (
        <section className="breadcrumb stage-padding">
            <div className="container-fluid container-xxl">
                <div className="row">
                    <div className="col-lg-8">
                        <div className="main-title font-white">
                            <h1>{title}</h1>
                        </div>

                        <div className="breadcrumb-list">
                            <span>
                                <Link href="./"> Home </Link> |
                                {pageId == 'single-service' ? <Link href="/solucoes"> Soluções |</Link> : ''}
                                <Link className="active" href="javascript:void(0)"> {title} </Link>
                            </span>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}