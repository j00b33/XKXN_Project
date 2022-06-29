const { Storage } = require('@google-cloud/storage');
const sharp = require('sharp');

// exports는 common js 방식 => import 하는 방식이 다름
exports.generateThumbnail = (event, context) => {
  // 1. event랑 context console로 찍어보기
  console.log('======================');
  console.log('Context : ', context);
  console.log('event : ', event);
  console.log('======================');

  // 2. 이미 썸네일이 있는 경우 종료(썸네일로 트리거 된 경우)
  if (event.name.includes('thumb/')) {
    return;
  }

  // 3. Thumbnail process
  const storage = new Storage().bucket(event.bucket);
  new Promise((resolve, reject) => {
    storage
      .file(event.name)
      .createReadStream() // 4. 기존의 파일을 읽어오기
      // 5. event 안에 있는 file을 활용하여 썸네일 생성 (mobile, tablet, PC) => sharp library 사용
      .pipe(sharp().resize({ width: 320 }))
      .pipe(storage.file(`thumb/${event.name}`).createWriteStream()) // 6. 새로 생성된 썸네일 업로드
      .on('finish', () => resolve()) // cloudfunction이라서 frontend가 받는다던가 뭐 굳이 받을게 없음
      .on('error', () => reject());
  });

  //   console.log(event.name); // filename
  //   console.log(event.bucket); // bucketname
};
