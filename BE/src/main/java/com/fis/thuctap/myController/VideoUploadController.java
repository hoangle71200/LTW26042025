package com.fis.thuctap.myController;

import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;

@RestController
@RequestMapping("/apitovideo")
public class VideoUploadController {

    private static final String UPLOAD_DIR = "C:/Users/ACER/Downloads/Thuc Tap/readt-project/src/image/video/";

    @PostMapping("/upload")
    public String uploadVideo(@RequestParam("file") MultipartFile file) {
        if (file.isEmpty()) {
            return "Vui lòng chọn một video để tải lên.";
        }

        try {
            File uploadDir = new File(UPLOAD_DIR);
            if (!uploadDir.exists()) {
                uploadDir.mkdirs();
            }

            File uploadedFile = new File(uploadDir, file.getOriginalFilename());
            file.transferTo(uploadedFile);

            return "Video đã được tải lên thành công: " + uploadedFile.getName();
        } catch (IOException e) {
            e.printStackTrace();
            return "Lỗi khi tải video lên: " + e.getMessage();
        }
    }
}
