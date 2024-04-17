import { S3Client, PutObjectCommand } from "@aws-sdk/client-s3";
import { getSignedUrl } from "@aws-sdk/s3-request-presigner";

const REGION = "ap-south-1";
const accessKeyId = "YOUR_ACCESS_KEY_ID";
const secretAccessKey = "YOUR_SECRET_ACCESS_KEY";
const s3Client = new S3Client({ 
    region: REGION,
    credentials: {
        accessKeyId: accessKeyId,
        secretAccessKey: secretAccessKey
    }
});

function handleUploadButtonClick() {
    const fileInput = document.getElementById('image-input');
    const file = fileInput.files[0];
    if (!file) {
        console.error('No file selected.');
        return;
    }
    generatePresignedUrlAndUpload(file);
}

async function generatePresignedUrlAndUpload(file) {
    try {
        const presignedUrl = await putObjectURL(file.name, file.type);
        await uploadFile(file, presignedUrl);
        console.log('Image uploaded successfully!');
    } catch (error) {
        console.error('Error uploading image:', error);
    }
}

async function putObjectURL(filename, contentType) {
    const command = new PutObjectCommand({
        Bucket: 'direct-image-upload-to-s3-bucket',
        Key: `uploads/user-uploads/${Date.now()}-${filename}`, // Fixed key construction
        ContentType: contentType
    });
    const url = await getSignedUrl(s3Client, command);
    return url;
}

async function uploadFile(file, presignedUrl) {
    try {
        const response = await fetch(presignedUrl, {
            method: 'PUT',
            body: file,
        });
        if (response.ok) {
            console.log('File uploaded successfully!');
        } else {
            console.error('Failed to upload file:', response.statusText);
        }
    } catch (error) {
        console.error('Error uploading file:', error);
    }
}

const uploadButton = document.getElementById('upload-button');
uploadButton.addEventListener('click', handleUploadButtonClick);
