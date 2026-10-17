
export default function App() {
  const products = [
    { id: 1, name: 'Headphones', price: '₹999', emoji: '🎧' },
    { id: 2, name: 'Smart Watch', price: '₹1,499', emoji: '⌚' },
    { id: 3, name: 'Shoes', price: '₹1,299', emoji: '👟' },
    { id: 4, name: 'Backpack', price: '₹799', emoji: '🎒' }
  ];

  return (
    <div style={{ fontFamily: 'Arial', background: '#f1f5f9', minHeight: '100vh' }}>
      <header style={{ background: '#1769e0', color: 'white', padding: 20 }}>
        <h1>ShopKart</h1>
        <input placeholder="Search products..." style={{ padding: 12, width: '90%' }} />
      </header>
      <main style={{ padding: 16 }}>
        <h2>Big Shopping Days!</h2>
        <h3>Popular Products</h3>
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 12 }}>
          {products.map(p => (
            <div key={p.id} style={{ background: 'white', padding: 16, borderRadius: 12 }}>
              <div style={{ fontSize: 40 }}>{p.emoji}</div>
              <h3>{p.name}</h3>
              <strong>{p.price}</strong>
              <p>ShopKart product</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  );
                          }
