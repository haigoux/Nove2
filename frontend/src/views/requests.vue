<script setup>

</script>

<template>
    <h1>
        Add Your Server
    </h1>
    <p>
        If you want your server in the list, please fill out the form below. Your request will be reviewed by the team,
        and if approved, your server will be added to the list.
    </p>
    <div class="server-form">
        <div class="inputs">
            <span>
                Thumbnail Image
            </span>
            <div class="image-dropper">
                <span class="drop-text">
                    Drag & Drop or Click
                </span>
            </div>
            <span>
                Server Name
            </span>
            <input type="text" placeholder="Enter server name" />
            <span>
                Server Description
            </span>
            <textarea placeholder="Enter server description"></textarea>
            <span>
                Server IP & Port
            </span>
            <input type="text" placeholder="(e.g.: 192.168.1.1:25565)" />
        </div>
        <div class="preview">

        </div>
    </div>
</template>

<script>
export default {
    props: {

    },
    data() {
        return {

        };
    },
    methods: {

    },
}
</script>

<style lang='scss' scoped>
h1 {
    font-size: 2em;
}

p {
    font-size: 1.5em;
    color: #666;
    margin-bottom: 40px;
}

.server-form {
    display: flex;
    flex-direction: row;
    gap: 20px;
    font-family: 'Rubik';

    .inputs {
        flex: 1;
        display: flex;
        flex-direction: column;
        font-family: 'Rubik';


        .image-dropper {
            width: 100%;
            height: 200px;
            border: 2px dashed #ccc;
            display: flex;
            align-items: center;
            justify-content: center;
            cursor: pointer;

            span {
                color: #999;
                font-size: 1.2em;
            }
        }

        input,
        textarea {
            width: 100%;
            padding: 10px;
            border-radius: 5px;
            border: 1px solid #ccc;
            font-family: 'Rubik';
            font-size: 1em;
            margin-bottom: 20px;

        }

        textarea {
            height: 100px;
        }

        span{
            font-size: 1.2em;
            margin-bottom: 5px;
            margin-top: 15px;
            color: #333;
        }
    }

    .preview {
        width: 500px;
        height: 500px;
        background-color: #f0f0f0;
        border-radius: 5px;
        box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
    }
}
</style>