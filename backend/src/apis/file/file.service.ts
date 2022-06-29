import { Injectable } from '@nestjs/common';
import { Storage } from '@google-cloud/storage';
import { FileUpload } from 'graphql-upload';

interface IFile {
  files: FileUpload[];
}

@Injectable()
export class FileService {
  async upload({ files }: IFile) {
    // storage에 파일 저장
    const myStorage = new Storage({
      // 2. 파일을 생성하고
      keyFilename: process.env.KEY_FILE_NAME,
      projectId: 'wise-invention-347011',
    }).bucket('main-project-files-bucket'); // 이 폴더에 저장해줘
    // .file(file.filename); // 이 이름으로

    // ** 일단 먼저 다 받기
    const waitedFiles = await Promise.all(files);

    // files === [file, file, file, file, ...]
    const results = await Promise.all(
      // [promise, promise, promise, ...] ==> [url, url, url, ...]
      waitedFiles.map((el) => {
        // element == 파일 하나하나
        return new Promise((resolve, reject) => {
          el.createReadStream() // 3. 읽어들이는거임
            .pipe(myStorage.file(el.filename).createWriteStream()) // 이 storage에 넣어줘! 하는거임  // 그럼 윗줄에서 읽어온 파일을 write하는거 그래서 실패 성공 여부 따지기 // 이 파일의 이름으로 읽겠다
            .on('finish', () => resolve(`wise-invention-347011/${el.filename}`)) // 끝나면 이거 실행시켜줘 (이미지 URL 프론트에 뱉기)
            .on('error', () => reject('실패')); // 에러나면 이거 실행시켜줘
          // 파일 실행시켜서 읽어주기 => createReadStream
          // 읽어들인 파일로 2차 작업을 할때 => pipe() 사용 (읽은 파일의 사이즈나 화질을 조정한다고 하는것)
        });
      }),
    );
    // commit test test test

    return results; // finish에서 성공하게 되면 frontend로 리턴해줘야함 // URL 출력
  }
}

// await 를 붙일 수 있는건 promise에 한에서 임
// 27-02 참조
