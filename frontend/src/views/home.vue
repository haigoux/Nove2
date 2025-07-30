<script setup>

</script>

<template>
    <!-- <div class="hero">
        <img src="@/assets/images/logo2.png" alt="Nove2 Logo" class="logo">
        <p>
            Novetus Community Servers
        </p>
    </div> -->
    <div class="section">
        <div class="text">
            <img src="@/assets/images/logo.png" />
            <h1>
                Welcome to Nove
            </h1>
            <p>
                This is a community server list for <a href="https://bitl.itch.io/novetus">Novetus</a>, a platform for
                playing classic Roblox games.
            </p>
            <div class="row">
                <button @click="$router.push('/servers')">
                    <img src="@/assets/icons/servers.png" />
                    <span>
                        Find Servers
                    </span>
                </button>
                <button class="purple">
                    <img src="@/assets/icons/discord.png" />
                    <span>
                        Discord
                    </span>
                </button>
            </div>
        </div>
        <div class="img">
            <img src="@/assets/images/robloxing.jpg" />
        </div>
    </div>
    <br>
    <br>
    <div class="section low">
        <div class="text">
            <img src="@/assets/icons/server.ico" />
            <h1>
                Community Servers
            </h1>
            <p>
                Play online with the Novetus community. Find the right server using the <a href="/servers">server list</a>.
            </p>
        </div>
        <div class="text">
            <img src="@/assets/icons/people.ico" />

            <h1>
                Contribute Servers
            </h1>
            <p>
                <a href="/requests">Add your server</a> to the list. All requests are manually reviewed.
            </p>
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
    mounted() {

    }
}
</script>

<style scoped lang="scss">
.hero {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    .logo {
        width: 350px;
        height: auto;
        margin: 0;
    }



    p {
        font-size: 1.2rem;
        color: #666;
        margin: 0;
        font-weight: 500;
    }
}

.header {
    border-left: 6px solid #dbdbdb;
    padding-left: 15px;
}

.section {
    display: flex;
    flex-direction: row;
    align-items: center;
    justify-content: space-between;
    margin-top: 20px;
    padding: 20px;
    height: fit-content;

    &.low{
        align-items: flex-start;

    }

    .text {
        flex: 1;
        margin-right: 20px;
        display: flex;
        flex-direction: column;
        justify-content: flex-end;
        height: 100%;
        img{
            width: 200px;
            // height: 30px;
            margin-bottom: 10px;
        }
    }

    .img {
        flex: 1;

        img {
            width: 100%;
            height: auto;
            border-radius: 10px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.466);
        }
    }

    h1 {
        font-size: 2rem;
        color: #333;
        margin-bottom: 10px;
    }

    p {
        font-size: 1.3rem;
        color: #555;
        max-width: 600px;
    }

    .row {
        display: flex;
        flex-direction: row;
        align-items: center;
        gap: 10px;
        margin-top: 20px;

        button {
            padding: 10px 20px;
            background-color: #007bff;
            color: white;
            border: none;
            border-radius: 5px;
            cursor: pointer;
            transition: background-color 0.3s;
            font-family: 'Rubik', sans-serif;
            font-weight: 500;
            font-size: 1rem;
            display: flex;
            align-items: center;

            &.purple {
                background-color: #424ac1;

                &:hover {
                    background-color: #2f358b;
                }
            }

            img {
                width: 20px;
                height: 20px;
                margin-right: 8px;
                margin-bottom: 0 !important;
            }

            &:hover {
                background-color: #0056b3;
            }
        }
    }
}

.server-list {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-top: 20px;
    padding: 20px;

    .list-item {
        display: flex;
        flex-direction: row;
        align-items: center;
        background: linear-gradient(0deg, #cfcfcf, #ffffff);
        padding: 15px;
        border-radius: 10px;
        transition: transform 0.3s;


        .image {
            width: 100px;
            height: 100px;
            margin-right: 20px;

            img {
                width: 100%;
                height: 100%;
                border-radius: 10px;
                object-fit: cover;
            }
        }

        .info {
            flex-grow: 1;

            h2 {
                font-size: 1.5rem;
                color: #333;
                margin-bottom: 5px;
            }

            p {
                color: #666;
                margin-bottom: 5px;
            }

            button {
                padding: 8px 16px;
                background-color: #28a745;
                color: white;
                border: none;
                border-radius: 5px;
                cursor: pointer;

                &:hover {
                    background-color: #218838;
                }
            }
        }

        .controls {
            display: flex;
            flex-direction: column;

            button {
                margin-top: 10px;
                padding: 6px 12px;
                background-color: #007bff;
                color: white;
                border-radius: 5px;

                &:hover {
                    background-color: #0056b3;
                }
            }
        }
    }
}
</style>
