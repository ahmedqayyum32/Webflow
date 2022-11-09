// Paste inside <head> tag
<link rel="stylesheet" href="https://fengyuanchen.github.io/datepicker/css/datepicker.css">


// Paste before </body> tag
<script src="https://fengyuanchen.github.io/datepicker/js/datepicker.js"></script>

<script>
    $(document).ready(function () {
        $('[data-toggle="datepicker"]').datepicker({
            format: 'mm-dd-yyyy'
        });
        // Available date placeholders:
        // Year: yyyy
        // Month: mm
        // Day: dd
        if (window.innerWidth < 768) {
            $('[data-toggle="datepicker"]').attr('readonly', 'readonly')
        }
    });

</script>

<!-- You can put your custom CSS attributes -->
<style>
    /* You can apply your own color! 
    --main-light-color is the light grey, 
    --main-dark-color is the text
    --main-active-color is the highlight
    you can just add like red, or blue or any helx you like! */
    :root {
        --main-light-color: #f3f5fb;
        --main-dark-color: #321f59;
        --main-active-color: #642eff;
    }

    .datepicker-dropdown {
        border-radius: 8px !important;
        border: 0 !important;
        -webkit-box-shadow: 0px 48px 88px rgba(23, 9, 54, 0.08);
        box-shadow: 0px 48px 88px rgba(23, 9, 54, 0.08);
        box-sizing: border-box;
    }

    .datepicker-panel>ul[data-view="week"]>li {
        background-color: var(--main-light-color);
        color: var(--main-dark-color);
        font-weight: bold;
        text-transform: uppercase;
        margin: 0;
        height: initial;
        padding-top: 3px;
        margin-bottom: 4px;
    }

    .datepicker-panel>ul[data-view="week"]>li:hover {
        background-color: var(--main-light-color);
        color: var(--main-dark-color);
        border-radius: 0px;
    }

    .datepicker-panel>ul[data-view="week"] li:first-child {
        border-radius: 20px 0 0 20px;
    }

    .datepicker-panel>ul[data-view="week"] li:last-child {
        border-radius: 0 20px 20px 0;
    }

    .datepicker-top-left::before,
    .datepicker-top-left::after {
        display: none;
    }

    .datepicker-panel>ul>li.picked,
    .datepicker-panel>ul>li.highlighted,
    .datepicker-panel>ul>li.picked:hover {
        color: var(--main-active-color);
        background: var(--main-light-color);
        border-radius: 8px;
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
    }

    li[data-view="month current"],
    li[data-view="year current"] {
        text-align: left;
        color: var(--main-dark-color);
        font-style: normal;
        font-weight: 500;
        font-size: 14px;
        /* line-height: 24px; */
        padding-left: 15px;
        border-radius: 10px;
    }

    .datepicker-panel>ul>li:hover {
        background: var(--main-light-color);
        border-radius: 10px;
    }

    li[data-view="month current"],
    li[data-view="year current"],
    li[data-view="years current"] {
        margin-bottom: 4px !important;
    }

    @media screen and (min-width: 768px) {
        .datepicker-dropdown {
            width: 364px;
            padding: 12px;
        }

        .datepicker-panel>ul>li {
            width: 48px;
            height: 48px;
            padding-top: 10px;
        }

        li[data-view="month next"],
        li[data-view="year next"],
        li[data-view="years next"] {
            position: absolute;
            right: 18px
        }

        li[data-view="month prev"],
        li[data-view="year prev"],
        li[data-view="years prev"] {
            position: absolute;
            right: 66px
        }

        ul[data-view="months"] li,
        ul[data-view="years"] li {
            padding-top: 0px;
            width: 57px !important;
        }
    }

    @media screen and (max-width: 768px) {
        .datepicker-panel {
            transform: scale(0.97);
        }
    }
</style>
