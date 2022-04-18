function get_username() {
 	const cookie = document.cookie;
  const nvs = cookie.split('; ');

   for (const nv of nvs) {
     if (nv.startsWith('username=')) {
       return nv.substring('username='.length);
     }
  }

   return '';
}

