import React, { useEffect, useState } from "react";


function CardTeen() {
    const [teenCenters, setTeenCenters] = useState([]);
    const [filterIlce, setFilterIlce] = useState('');
    const [filterMahalle, setFilterMahalle] = useState('');

    useEffect(() => {
        const fetchTeenCenters = async () => {
            try {
                const response = await fetch('src/data/genclik_merkezleri.geojson');
                const dataTeenCenters = await response.json();
                console.log(dataTeenCenters);

                setTeenCenters(dataTeenCenters.features);
            } catch (error) {
                console.error('Veri alınırken bir hata oluştu:', error);
            }
        };

        fetchTeenCenters();
    }, []);

    // Filtreleme fonksiyonu
    const filteredTeenCenters = teenCenters.filter(center => {
        const ilce = center.properties.ILCE.toLowerCase();
        const mahalle = center.properties.MAHALLE.toLowerCase();
        const filteredIlce = filterIlce.toLowerCase();
        const filteredMahalle = filterMahalle.toLowerCase();

        if (filterIlce && ilce.indexOf(filteredIlce) === -1) {
            return false;
        }
        if (filterMahalle && mahalle.indexOf(filteredMahalle) === -1) {
            return false;
        }
        return true;
    });

    return (
        <>
            <h2>Gençlik Merkezleri</h2>
            <form>
                <div className="mb-3">
                    <label htmlFor="ilce" className="form-label">İlçe:</label>
                    <input type="text" className="form-control" id="ilce" value={filterIlce} onChange={(e) => setFilterIlce(e.target.value)} />
                    <small className="text-muted">İlçe bilgisini girerken sadece büyük harf kullanınız.</small>
                </div>
                <div className="mb-3">
                    <label htmlFor="mahalle" className="form-label">Mahalle:</label>
                    <input type="text" className="form-control" id="mahalle" value={filterMahalle} onChange={(e) => setFilterMahalle(e.target.value)} />
                    <small className="text-muted">Mahalle bilgisini girerken sadece büyük harf kullanınız.</small>
                </div>
            </form>
            <div className="card border border-primary-subtle ">
                {filteredTeenCenters.map(center => (
                    <div key={center.properties.OBJECTID}>
                        <div className="card-header border border-info-subtle border-3">
                            <h3 className="text-danger">{center.properties.ADI}</h3>
                        </div>
                        <div className="card-body">
                            <p>İlçe: {center.properties.ILCE}</p>
                            <p>Mahalle: {center.properties.MAHALLE}</p>
                            <p>Adres: {center.properties.ADRES}</p>
                            <p>Çalışma Saati: {center.properties.CALISMA_SA}</p>
                        </div>
                    </div>
                ))}
            </div>
        </>
    );
}

export default CardTeen;

