import { Statistic, Progress, Divider, Row, Spin } from "antd";



export default function CustomerPreviewCard() {
    return (
        <Row className="gutter-row">
            <div className="whiteBox shadow" style={{ height: 458 }}>
                <div
                    className="pad20"
                    style={{
                        textAlign: "center",
                        justifyContent: "center",
                    }}
                >
                    <h3 style={{ color: "#22075e", marginBottom: 40, marginTop: 15, fontSize: "large" }}>
                        Customers
                    </h3>

                    <div
                        style={{
                            display: "grid",
                            justifyContent: "center",
                        }}
                    >
                        <Progress type="dashboard" />
                        <p>New Customer this Month</p>
                        <Divider />
                        <Statistic 
                           title= "Active Customer"
                           suffix="%"
                        />

                    </div>
                </div>
            </div>
        </Row>
    )
}