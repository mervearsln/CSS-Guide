import './style/style.scss';


/**
 * 
 * grid line : Yatay ya da dikey çizgiler olarak düşünülebilir. Numara ile adlandırılırlar.
 * Grid Container: Row, column, cell gibi yapıların oluşumunu sağlayan ana kutu.
 * Grid Row: Yatay kısımlardan oluşan yapılardır.
 * Grid Column: Dikey kısımlardan oluşan yapılardır.
 * Grid Cell: Gridin en küçük birimidir. 4 tane grid line arasında bulunur.
 * Grid Area: Birçok birimden(grid cell) oluşan yapıdır.
 * Grid Gap: Column ya da row arasındaki boşluklardır.
 * grid-track: grid column veya grid-row’un genel terimidir.
 */
function Grid() {
    return (
        <div>
            <div class="grid-basics-container">
                <div class="item-1">s</div>
                <div class="item-2">s</div>
                <div class="item-3">s</div>
                <div class="item-4">s</div>
                <div class="item-5">s</div>
                <div class="item-6">s</div>
            </div>
            <div class="grid-child-elements-positions-container">
                <div class="item-1">1</div>
                <div class="item-2">2</div>
                <div class="item-3">3</div>
                <div class="item-4">4</div>
                <div class="item-5">5</div>
                <div class="item-6">6</div>
            </div>
            <div class="grid-spanning-container">
                <div class="item-1">1</div>
                <div class="item-2">2</div>
                <div class="item-3">3</div>
                <div class="item-4">4</div>
                <div class="item-5">5</div>
                <div class="item-6">6</div>
            </div>
            <div class="naming-grid-areas-container">
                <header class="header"></header>
                <aside class="aside"></aside>
                <main class="main"></main>
                <section class="item-1"></section>
                <section class="item-2"></section>
            </div>
        </div>
    );
}

export default Grid;
