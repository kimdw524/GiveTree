package com.dareuda.givetree.media.domain;

import org.apache.tika.Tika;
import org.apache.tika.mime.MimeType;
import org.apache.tika.mime.MimeTypeException;
import org.apache.tika.mime.MimeTypes;
import org.springframework.stereotype.Component;
import org.springframework.web.multipart.MultipartFile;

import java.io.IOException;
import java.nio.charset.StandardCharsets;
import java.security.MessageDigest;
import java.security.NoSuchAlgorithmException;
import java.time.LocalDateTime;

@Component
public class FileNameGenerator {

    private static final Tika tika = new Tika();

    public String generate(MultipartFile multipartFile, String memberName) {
        return md5(multipartFile, memberName) + extension(multipartFile);
    }

    private String md5(MultipartFile multipartFile, String memberName) {
        try {
            String fileName = multipartFile.getOriginalFilename();

            MessageDigest messageDigest = MessageDigest.getInstance("MD5");
            messageDigest.update(
                    (fileName + memberName + LocalDateTime.now()).getBytes(StandardCharsets.UTF_8)
            );

            return String.format("%02x", messageDigest.digest());
        } catch (NoSuchAlgorithmException e) {
            throw new RuntimeException(e);
        }
    }

    private String extension(MultipartFile multipartFile) {
        MimeTypes defaultMimeType = MimeTypes.getDefaultMimeTypes();
        try {
            MimeType mimeType = defaultMimeType.forName(tika.detect(multipartFile.getBytes()));
            return mimeType.getExtension();
        } catch (MimeTypeException | IOException e) {
            throw new RuntimeException(e);
        }
    }
}
