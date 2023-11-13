
export const Navbar = () => {

  const handleLogout = () => {
    localStorage.clear();
    window.location.href = '/login'
  };

  return (
    <nav className="bg-primary" style={{ display: 'flex', justifyContent: 'space-between' }}>
      <div className="p-2 text-white">Logo</div>
      <button  onClick={handleLogout} className="btn btn-link text-white">Logout</button>
    </nav>
  );
};