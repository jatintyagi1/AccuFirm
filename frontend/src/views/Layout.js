import Header from '../mixins/Header';
import Navigation from '../mixins/Navigation';
import Panel from '../mixins/Panel';

export default function Layout({ content }) {
    return (
        <div className="app">
            <Header tagline="Fresh Seafood Market" />
            <Navigation />
            <Panel name={{ value: "dashboard test" }} />
            {content}
        </div>
    );
}