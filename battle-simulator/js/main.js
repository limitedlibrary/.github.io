// Battle Simulator | 月刊試作録⑤ 3Dコマンドバトル試作
// 画像の読み込み判定と、スクリーンショット拡大表示（ライトボックス）のみを行う最小限のスクリプト

document.addEventListener("DOMContentLoaded", () => {
    setupShotFrames();
    setupLightbox();
});

// スクリーンショット画像が存在するかどうかを判定し、
// 読み込めた場合は画像を、失敗した場合はプレースホルダーを表示する
function setupShotFrames() {
    document.querySelectorAll(".shot-frame img").forEach((img) => {
        if (img.complete && img.naturalWidth > 0) {
            img.classList.add("is-loaded");
            return;
        }
        img.addEventListener("load", () => img.classList.add("is-loaded"));
        img.addEventListener("error", () => img.classList.add("is-error"));
    });
}

// スクリーンショットグリッドのクリックで拡大表示するライトボックス
function setupLightbox() {
    const lightbox = document.getElementById("lightbox");
    const lightboxImg = document.getElementById("lightbox-img");
    const lightboxCaption = document.getElementById("lightbox-caption");

    if (!lightbox || !lightboxImg || !lightboxCaption) return;

    document.querySelectorAll(".shot-card").forEach((card) => {
        card.addEventListener("click", () => {
            const img = card.querySelector(".shot-frame img");
            const caption = card.dataset.caption || "";

            // 画像が読み込めていない（試作段階でまだ用意されていない）場合は拡大表示しない
            if (!img || !img.classList.contains("is-loaded")) return;

            lightboxImg.src = img.src;
            lightboxImg.alt = img.alt;
            lightboxCaption.textContent = caption;
            openLightbox();
        });
    });

    lightbox.querySelectorAll("[data-close]").forEach((el) => {
        el.addEventListener("click", closeLightbox);
    });

    document.addEventListener("keydown", (e) => {
        if (e.key === "Escape" && !lightbox.hidden) closeLightbox();
    });

    function openLightbox() {
        lightbox.hidden = false;
        document.body.style.overflow = "hidden";
    }

    function closeLightbox() {
        lightbox.hidden = true;
        document.body.style.overflow = "";
        lightboxImg.src = "";
    }
}
