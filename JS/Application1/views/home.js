Application1.home = function (params) {
    "use strict";

    function FileSystemFail(evt) {
        alert('Error:' + evt.error.code.toString());
    }
    function GetFileEntryWriter(fileEntry) {
        fileEntry.createWriter(WriteFile, FileSystemFail);
    }
    function WriteFile(writer) {
        writer.onwrite = function (evt) {
            alert("Writing complete");
        };
        writer.write(viewModel.txtValue());
    }
    function GetFileEntryWriter(fileEntry) {
        fileEntry.createWriter(WriteFile, FileSystemFail);
    }
    function GetFileEntryReader(fileEntry) {
        fileEntry.file(ReadFile, FileSystemFail);
    }
    function ReadFile(file) {
        var reader = new FileReader();
        reader.onloadend = function (evt) {
            viewModel.txtValue(evt.target.result);
            alert('Reading complete.');
        };
        reader.readAsText(file);
    }
    var viewModel = {
        txtValue: ko.observable('test'),
        onButtonWriteClick: function (e) {
            if (Application1.fileSystem == null) {
                alert('File system is not accessible');
                return;
            }
            Application1.fileSystem.root.getFile("test.txt", { create: true }, GetFileEntryWriter, FileSystemFail);
        },
        onButtonReadClick: function (e) {
            if (Application1.fileSystem == null) {
                alert('File system is not accessible');
                return;
            }
            Application1.fileSystem.root.getFile("test.txt", { create: true }, GetFileEntryReader, FileSystemFail);
        }
    };
    return viewModel;
};