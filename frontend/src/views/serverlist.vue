<script setup>

</script>

<template>
    <div class="container">
        <div class="sidebar">
            <span>
                Categories
            </span>
            <button>
                Horror (5)
            </button>
            <button>
                Adventure (3)
            </button>
            <button>
                Action (8)
            </button>
        </div>
        <div class="results">
            <div class="listing">
                <div class="image">
                    <img src="@/assets/images/robloxing.jpg" />
                </div>
                <div class="info">
                    <h2>
                        Server Name
                    </h2>
                    <span class="creator">
                        Creator
                    </span>
                    <div class="stats">
                        <span class="player-count">
                            <img src="@/assets/icons/people.ico" />
                            5 players
                        </span>
                        <span class="updated">
                            <img src="@/assets/icons/stat.ico" />
                            2 days ago
                        </span>
                    </div>
                </div>

            </div>
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
.header {
    text-align: left;
    margin: 0;
    margin-bottom: 20px;
}

.container {
    display: flex;
    flex-direction: row;
    gap: 1rem;
}

.sidebar {
    display: flex;
    flex-direction: column;
    width: 200px;
    border-right: 1px solid #dbdbdb;
    gap: 10px;

    span {
        font-weight: 600;
        font-size: 1.6rem;
    }

    button {
        background: none;
        border: none;
        padding: 10px;
        text-align: left;
        font-size: 1.2rem;
        color: #333;
        cursor: pointer;
        background: linear-gradient(to top, #cacaca, #ffffff);
        border-radius: 5px;

        &:hover {
            box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
        }

        &:active {
            background: linear-gradient(to top, #aaaaaa, #ffffff);
        }
    }
}

.results {
    flex: 1;
    display: flex;
    flex-direction: row;
    flex-wrap: wrap;
    justify-content: space-between;
    gap: 20px;
}

.listing {
    display: flex;
    flex-direction: column;
    padding: 10px;
    border-radius: 10px;
    // sqaure only
    width: 300px;
    height: 400px;

    .image {
        height: 200px;
        width: 100%;
        display: flex;
        justify-content: center;
        align-items: center;

        img {
            width: 100%;
            height: 100%;
            object-fit: cover;
            border-radius: 5px;
            box-shadow: 0 2px 10px rgba(0, 0, 0, 0.041);
        }
    }

    .info {
        display: flex;
        flex-direction: column;
        padding-top: 10px;

        h2 {
            font-size: 1.5rem;
            margin-bottom: 5px;
        }

        span {
            font-size: 1.2rem;
            color: #666;

            &.creator {
                cursor: pointer;
                color: #007bff;

                &:hover {
                    text-decoration: underline;

                }
            }
        }

        .stats {
            display: flex;
            justify-content: space-between;
            margin-top: 10px;

            .player-count,
            .updated {
                font-size: 1rem;
                color: #3b3b3b;
                display: flex;
                align-items: center;
                img {
                    width: 26px;
                    height: 26px;
                    margin-right: 5px;
                }

            }
        }
    }
}
</style>
