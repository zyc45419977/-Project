app.service('uploadService', function ($http) {
    //上传文件
    this.uploadFile = function () {
        // 向后台传递数据:
        var formData = new FormData();
        // 向formData中添加数据:
        formData.append("file", file.files[0]);

        return $http({
            method: 'post',
            url: 'http://localhost:8081/upload/uploadImage',
            data: formData,
            headers: {'Content-Type': undefined},// Content-Type : text/html  text/plain
            transformRequest: angular.identity
        });

    }
});


