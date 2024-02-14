import React, { useEffect, useState } from 'react';

function CardBusmek() {
    const [Busmek, setBusmek] = useState([]);
    const [filterIlce, setFilterIlce] = useState('');
    const [filterMahalle, setFilterMahalle] = useState('');

    useEffect(() => {
        const fetchBusmek = async () => {
            try {
                const response = await fetch('src/data/busmek_kurs_merkezleri.geojson');
                const dataBusmek = await response.json();
                console.log(dataBusmek);

                setBusmek(dataBusmek.features);
            } catch (error) {
                console.error('Veri alınırken bir hata oluştu:', error);
            }
        };

        fetchBusmek();
    }, []);

    
    const filteredBusmek = Busmek.filter(center => {
        const ilce = center.properties.ILCE.toLowerCase();
        const mahalle = center.properties.MAHALLE.toLowerCase();
        const filteredIlce = filterIlce.toLowerCase();
        const filteredMahalle = filterMahalle.toLowerCase();

        if (filterIlce && ilce !== filteredIlce) {
            return false;
        }
        if (filterMahalle && mahalle !== filteredMahalle) {
            return false;
        }
        return true;
    });

    return (
        <>
            <h2>BUSMEK Kursları</h2>
            {/* Filtreleme formu */}
            <form>
                <div className="mb-3">
                    <label htmlFor="ilce" className="form-label">İlçe:</label>
                    <input type="text" className="form-control" id="ilce" value={filterIlce} onChange={(e) => setFilterIlce(e.target.value)} />
                </div>
                <div className="mb-3">
                    <label htmlFor="mahalle" className="form-label">Mahalle:</label>
                    <input type="text" className="form-control" id="mahalle" value={filterMahalle} onChange={(e) => setFilterMahalle(e.target.value)} />
                </div>
            </form>

            <div className="card">
                {filteredBusmek.map(center => (
                    <div key={center.properties.OBJECTID}>
                        <div className='card-header border border-info-subtle border-3'><h3 className="text-danger">{center.properties.ADI}</h3> </div>
                        <div className="card-body">
                            <p>İlçe: {center.properties.ILCE}</p>
                            <p>Mahalle: {center.properties.MAHALLE}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default CardBusmek;
