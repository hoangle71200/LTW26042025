package com.fis.thuctap.myController;
import org.springframework.web.bind.annotation.*;
import org.springframework.web.multipart.MultipartFile;

import java.io.File;
import java.io.IOException;

@RestController
@RequestMapping("/apitoimage")
public class ImageUploadController {

    private static final String UPLOAD_DIR = "C:/Users/ACER/Downloads/Thuc Tap/readt-project/src/image/";

    @PostMapping("/upload")
    public String uploadImage(@RequestParam("file") MultipartFile file) {
        if (file.isEmpty()) {
            return "Vui lòng chọn một file để tải lên.";
        }

        try {
            // Tạo thư mục nếu chưa tồn tại
            File uploadDir = new File(UPLOAD_DIR);
            if (!uploadDir.exists()) {
                uploadDir.mkdirs();
            }

            // Lưu file vào thư mục
            File imageFile = new File(uploadDir, file.getOriginalFilename());
            file.transferTo(imageFile);

            return "Ảnh đã được tải lên thành công: " + imageFile.getName();
        } catch (IOException e) {
            e.printStackTrace();
            return "Lỗi khi tải ảnh lên: " + e.getMessage();
        }
    }
}