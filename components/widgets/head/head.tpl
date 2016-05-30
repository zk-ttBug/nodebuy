<header id="header" class="page-topbar">
    <!-- start header nav-->
    <div class="navbar-fixed">
        <nav class="navbar-color light-blue accent-4">
            <div class="nav-wrapper">
                <a v-if="page == 'dash'" id="head-menu-btn" v-on:click="onMenu" class="menu-btn btn-floating waves-effect waves-light accent-4 tooltipped" data-position="down" data-delay="50" data-tooltip="菜单控制"><i class="fa fa-list"></i></a>
                <a href="javascript:void(0);" class="brand-logo">NodeBuy</a>
                <!--<ul class="index-logo-left left hide-on-med-and-down">-->
                    <!--<li v-on:click="onHome">-->
                        <!--<div class="index-logo waves-effect waves-block waves-light notification-button tooltipped"  data-position="down" data-delay="50" data-tooltip="回到首页">-->
                            <!--<i class="fa fa-cubes"></i>-->
                        <!--</div>-->
                    <!--</li>-->
                <!--</ul>-->
                <ul class="index-logo-right right hide-on-med-and-down">
                    <li v-on:click="onFull">
                        <a href="javascript:void(0);" class="waves-effect waves-block waves-light toggle-fullscreen tooltipped" data-position="down" data-delay="50" data-tooltip="全屏展示">
                            <i class="mdi-action-settings-overscan"></i>
                        </a>
                    </li>
                </ul>
                <ul id="nav-mobile" class="right hide-on-med-and-down">
                    <!--<li v-if="page == 'index'"><a class="waves-effect waves-block waves-light " href="#!/dash/pas/computers">运维后台</a></li>-->
                    <li v-if="page != 'index'"><a class="waves-effect waves-block waves-light "  v-on:click="onLogout"  href="javascript:void(0)">注销</a></li>
                </ul>
                <!-- translation-button -->

                <!-- notifications-dropdown -->

            </div>
        </nav>
    </div>
    <!-- end header nav-->
</header>