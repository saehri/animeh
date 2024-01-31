import {db} from '../src/utils/db.server';

type Anime = {
  title: string;
  synopsis?: string;
  releaseYear: number;
};

type Genre = {
  name: string;
};

type Studio = {
  name: string;
};

function getAnimes(): Array<Anime> {
  return [
    {
      title: 'A-Channel',
      releaseYear: 2011,
      synopsis:
        'Menceritakan tentang kehidupan sekolah sekelompok siswi. Cerita dimulai ketika Tooru memasuki sekolah SMA. Tooru sangat senang karena ia dapat masuk sekolah yang sama dengan sahabatnya baiknya, yaitu Run.\nSaking senangnya, ia ingin cepat-cepat memberi kabar baik tersebut kepada Run. Namun saat ia baru saja ingin menyampaikan kabar tersebut, ia mendapati Run hampir berciuman dengan teman sekelasnya, yaitu Yuuko.\nKejadian tersebut pastinya membuat Tooru shock, oleh karena itu, dari hari pertamanya sekolah. Tooru menghalau semua laki-laki yang berada di sekeliling Run. Dan walau Tooru tidak suka dengan Yuuko, namun hal tersebutlah membuat hubungan mereka menjadi dekat.\nBahkan teman Run yaitu Nagi mulai tertarik untuk berteman dengan Tooru. Dari sinilah cerita empat sekawan dimulai. Membuat mereka semakin dekat dengan hari-hari yang indah mereka lewati.',
    },
  ];
}

function getGenres(): Array<Genre> {
  return [
    {name: 'fantasy'},
    {name: 'school'},
    {name: 'echi'},
    {name: 'seinen'},
    {name: 'slice of life'},
    {name: 'comedy'},
    {name: 'horror'},
  ];
}

function getStuidos(): Array<Studio> {
  return [
    {
      name: 'Studio Gokumi',
    },
  ];
}

async function seed() {
  /* Animes seeds */
  await Promise.all(
    getAnimes().map((anime) => {
      return db.anime.create({
        data: {
          ...anime,
        },
      });
    })
  );

  const animes = await db.anime.findFirst({
    where: {
      title: 'A-Channel',
    },
  });

  /* Genres seeds */
  await Promise.all(
    getGenres().map((genre) => {
      return db.genre.create({
        data: {
          name: genre.name,
        },
      });
    })
  );

  const genres = await db.genre.findFirst({
    where: {
      name: 'fantasy',
    },
  });

  /* Studio seeds */
  await Promise.all(
    getStuidos().map((studio) => {
      return db.studio.create({
        data: {
          ...studio,
        },
      });
    })
  );

  const studios = await db.studio.findFirst({
    where: {
      name: 'Studio Gokumi',
    },
  });
}

seed();
