export { Layout };

function Layout({ children }) {

    return (
        <div className="col-md-4 offset-md-4 mt-5">
            {children}
        </div>
    );
}