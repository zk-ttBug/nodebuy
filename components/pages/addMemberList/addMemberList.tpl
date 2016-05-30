<form id="addMemberListForm" method="post" enctype="multipart/form-data">
    <div class="file-field input-field">
        <div class="btn">
            <span>File</span>
            <input type="file" name="memberList" multiple>
        </div>
        <div class="file-path-wrapper">
            <input class="file-path validate" name="memberList" type="text" placeholder="请选择要导入的会员列表">
        </div>
    </div>
    <div class="col s2 game-search-btn">
        <a class="waves-effect waves-light btn blue lighten-1" v-on:click="uploadFile();">确认导入</a>
    </div>
</form>